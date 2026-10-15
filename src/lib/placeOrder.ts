import { getFirstLandingUrl } from '@/lib/attribution';
import { trackPurchase } from '@/lib/pixel';

export interface OrderLine {
  id: string;
  sku?: string;
  name: string;
  quantity: number;
  price: number;
}

export interface PlacedOrder {
  orderId: string;
  customerName: string;
  phoneNumber: string;
  items: OrderLine[];
  totalAmount: number;
  hasUpsell: boolean;
  upsellProduct: string | null;
  upsellAmount: number;
  eventId: string;
  landingUrl: string;
  url: string;
}

function skuFor(id: string, name: string, sku?: string): string {
  if (sku) return sku;
  if (id.includes('hair-brush') || id.includes('brosse') || name.includes('فرشاة')) return 'VM-BRH-11';
  if (id.includes('screw') || name.includes('مفك')) return 'VM-SCR-10';
  if (id.includes('dryer') || id.includes('sechoir') || name.includes('مجفف')) return 'VM-DRY-09';
  if (id.includes('gift-set') || name.includes('طقم')) return 'VM-SET-08';
  if (id.includes('faucet') || id.includes('robinet') || name.includes('صنبور')) return 'VM-TAP-07';
  if (id.includes('armoire') || name.includes('خزانة')) return 'VM-ARM-01';
  if (id.includes('neck') || name.includes('رقبة') || name.includes('الرقبة')) return 'VM-NCK-06';
  if (id.includes('massager') || name.includes('مساج')) return 'VM-FMS-02';
  if (id.includes('chaise') || name.includes('كرسي')) return 'VM-BBY-03';
  if (id.includes('makeup') || name.includes('مكياج') || name.includes('منظم')) return 'VM-MKB-04';
  if (id.includes('box') || name.includes('ملاكمة')) return 'VM-BOX-05';
  return `VM-${id.toUpperCase()}-01`;
}

export async function placeOrder(
  customerName: string,
  customerPhone: string,
  items: OrderLine[]
): Promise<PlacedOrder> {
  const eventId = 'evt_' + Math.random().toString(36).substring(2, 15) + Date.now();
  const orderId = 'vitalis-' + Math.floor(100000 + Math.random() * 900000);
  const orderItems = items.map((item) => ({
    id: item.id,
    sku: skuFor(item.id, item.name, item.sku),
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));
  const totalAmount = orderItems.reduce((sum, item) => sum + item.price, 0);
  const landingUrl = getFirstLandingUrl();

  const payload: PlacedOrder = {
    orderId,
    customerName: customerName || 'عميل فيتاليس ماروك',
    phoneNumber: customerPhone || '0600000000',
    items: orderItems,
    totalAmount,
    hasUpsell: false,
    upsellProduct: null,
    upsellAmount: 0,
    eventId,
    landingUrl,
    url: landingUrl,
  };

  try {
    trackPurchase(orderId, totalAmount, orderItems, eventId, customerPhone);
  } catch (pixelErr) {
    console.warn('Pixel tracking warning:', pixelErr);
  }

  try {
    const response = await fetch('/api/v1/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const fallbacks = [
        process.env.NEXT_PUBLIC_API_URL,
        'https://api.vitalismaroc.shop',
      ].filter(Boolean) as string[];
      for (const base of fallbacks) {
        const res = await fetch(`${base.replace(/\/+$/, '')}/api/v1/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) break;
      }
    }
  } catch (err) {
    console.error('❌ [Order Submit Notice]:', err);
  }

  return payload;
}
