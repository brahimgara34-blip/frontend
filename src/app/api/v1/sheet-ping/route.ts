import { NextResponse } from 'next/server';
import { sendOrderToGoogleSheet } from '@/lib/sheetsWebhook';

export async function GET() {
  const result = await sendOrderToGoogleSheet({
    orderId: 'vitalis-ping-' + Date.now().toString().slice(-6),
    customerName: 'اختبار تلقائي',
    phoneNumber: '0600000000',
    items: [{ id: 'shower', sku: 'VM-SHW-01', name: 'اختبار Sheet', quantity: 1, price: 0 }],
    totalAmount: 0,
    landingUrl: 'https://vitalismaroc.shop/api/v1/sheet-ping',
  });

  return NextResponse.json({
    message: result.ok ? 'تم إرسال صف تجريبي إلى Google Sheet' : 'فشل الإرسال إلى Google Sheet',
    ...result,
  }, { status: result.ok ? 200 : 502 });
}
