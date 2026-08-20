import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Priority list of all possible backend endpoints (Internal Docker Network, Env, and Public URLs)
    const candidateUrls = [
      process.env.INTERNAL_BACKEND_URL,
      process.env.BACKEND_URL,
      'http://backend:8000',
      'http://vitalismaroc-backend:8000',
      'http://vitalismaroc_backend:8000',
      'http://172.17.0.1:8000',
      'http://host.docker.internal:8000',
      process.env.NEXT_PUBLIC_API_URL,
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
          signal: AbortSignal.timeout(4000),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ [Internal Order Forward] Successfully sent order #${body.orderId} to ${targetUrl}`);
          return NextResponse.json(data, { status: 201 });
        } else {
          const errText = await response.text();
          console.warn(`[Internal Order Forward Warning] ${targetUrl} returned status ${response.status}: ${errText}`);
          lastError = errText;
        }
      } catch (err: any) {
        lastError = err?.message || String(err);
      }
    }

    console.error('❌ [Internal Order Forward Error] All backend candidate URLs failed. Last error:', lastError);
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
