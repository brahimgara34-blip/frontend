import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Priority list of candidate backend URLs:
    // 1. Direct Easypanel Docker Service Names
    // 2. Custom Environment Variables
    // 3. Public Domain / Server IP Fallbacks
    const candidateUrls = [
      'http://backend:8000',
      'http://vitalismaroc_backend:8000',
      'http://vitalismaroc-backend:8000',
      process.env.INTERNAL_BACKEND_URL,
      process.env.BACKEND_URL,
      process.env.NEXT_PUBLIC_API_URL,
      'http://191.215.41.119:8000',
      'https://api.vitalismaroc.shop',
      'http://api.vitalismaroc.shop',
      'http://127.0.0.1:8000',
    ].filter(Boolean) as string[];

    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || '';

    let lastError = null;

    for (const baseUrl of candidateUrls) {
      const cleanBase = baseUrl.replace(/\/+$/, '');
      const targetUrl = `${cleanBase}/api/v1/orders`;

      try {
        const response = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-forwarded-for': clientIp,
            'user-agent': userAgent,
          },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(3500),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ [Order Forwarded]: Successfully sent order #${body.orderId} to ${targetUrl}`);
          return NextResponse.json(data, { status: 201 });
        } else {
          const errText = await response.text();
          console.warn(`[Order Forward Warning]: ${targetUrl} returned status ${response.status}: ${errText}`);
          lastError = errText;
        }
      } catch (err: any) {
        lastError = err?.message || String(err);
      }
    }

    console.error('❌ [Order Forward Error]: All backend candidate URLs failed. Last error:', lastError);
    return NextResponse.json(
      { error: 'Backend unreachable', details: lastError },
      { status: 502 }
    );
  } catch (error: any) {
    console.error('❌ [Next.js Route Error]:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error?.message },
      { status: 500 }
    );
  }
}
