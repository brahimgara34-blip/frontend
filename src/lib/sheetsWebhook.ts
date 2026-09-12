const SHEETS_WEBHOOK =
  process.env.GOOGLE_SHEET_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbzKj-JgAocEBK1wlnIX-M0Uand48zVAb70NP8zH_wrk7LDZ4mgjZq3tCqnfOA-BZg2v7Q/exec';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function today() {
  const now = new Date();
  return `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
}

function formatPhone(phone: string) {
  let digits = String(phone || '').replace(/\D/g, '');
  if (digits.startsWith('212')) digits = digits.slice(3);
  else if (digits.startsWith('0')) digits = digits.slice(1);
  return `212 ${digits}`;
}

function skuFromItem(item: { id?: string; sku?: string; name?: string }) {
  if (item.sku) return item.sku;
  const id = String(item.id || '').toLowerCase();
  const name = String(item.name || '').toLowerCase();
  if (id.includes('shower') || name.includes('hydropure') || name.includes('دوش') || name.includes('رشاش')) return 'VM-SHW-01';
  if (id.includes('flosser') || name.includes('aurafloss') || name.includes('خيط')) return 'VM-FLS-02';
  if (id.includes('knee') || id.includes('cushion') || name.includes('kneerelief') || name.includes('ركبة')) return 'VM-KNE-03';
  if (id.includes('scale') || name.includes('vitalfit') || name.includes('ميزان')) return 'VM-SCL-04';
  return 'VM-PROD-01';
}

export function buildSheetsPayload(order: any) {
  const items = Array.isArray(order.items) ? order.items : [];
  const products = items.map((i: any) => String(i.name || 'منتج فيتاليس ماروك').replace(/^\[.*?\]\s*/, ''));
  const skus = items.map((i: any) => skuFromItem(i));
  const quantities = items.map((i: any) => String(i.quantity || 1));
  const rawId = String(order.orderId || order.orderid || '');
  const orderid = rawId.toLowerCase().startsWith('vitalis') ? rawId : `vitalis-${rawId.replace(/\D/g, '') || Date.now()}`;
  const landingUrl = String(order.landingUrl || order.url || '');

  return {
    date: today(),
    orderid,
    country: 'maroc',
    name: order.customerName || order.name || 'عميل فيتاليس ماروك',
    phone: formatPhone(order.phoneNumber || order.phone || ''),
    product: products.join('/') || 'منتج فيتاليس ماروك',
    sku: skus.join('/') || 'VM-SHW-01',
    url: landingUrl,
    landingUrl,
    quantity: quantities.join('/') || '1',
    'total price': Number(order.totalAmount || 0),
    total_price: Number(order.totalAmount || 0),
    currency: 'SAR (الدرهم.المغربي)',
    status: '',
    items,
    orderId: orderid,
    customerName: order.customerName || order.name,
    phoneNumber: formatPhone(order.phoneNumber || order.phone || ''),
    totalAmount: Number(order.totalAmount || 0),
  };
}

async function postAppsScript(url: string, payload: unknown) {
  const body = JSON.stringify(payload);
  const headers = { 'Content-Type': 'text/plain;charset=utf-8' };

  const followed = await fetch(url, {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
  });
  if (followed.ok) return followed;

  let current = url;
  for (let i = 0; i < 6; i++) {
    const res = await fetch(current, {
      method: 'POST',
      headers,
      body,
      redirect: 'manual',
      signal: AbortSignal.timeout(15000),
    });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) return res;
      current = location;
      continue;
    }
    return res;
  }
  return followed;
}

export async function sendOrderToGoogleSheet(order: any) {
  const payload = buildSheetsPayload(order);
  const res = await postAppsScript(SHEETS_WEBHOOK, payload);
  const text = res ? await res.text().catch(() => '') : '';
  const ok = Boolean(res && res.ok && !text.includes('error'));
  console.log(`📊 [Sheets] ${res?.status || 'no-response'} ${text.slice(0, 200)}`);
  return { ok, status: res?.status || 0, body: text };
}
