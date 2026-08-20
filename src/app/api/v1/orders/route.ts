import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Candidate backend URLs in order of priority (Internal Docker network -> Custom Env -> Public API)
    const candidateUrls = [
      process.env.INTERNAL_BACKEND_URL,
      process.env.BACKEND_URL,
      'http://backend:8000',
      'http://vitalismaroc_backend:8000',
      process.env.NEXT_PUBLIC_API_URL,
      'https://api.vitalismaroc.shop',
      'http://127.0.0.1:8000',
    ].filter(Boolean) as string[];

    // Extract real client IP and User Agent to pass to Backend
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || '';

    let lastError = null;

    // Try connecting to candidate backend URLs
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
          // Short timeout for fallback resolution
          signal: AbortSignal.timeout(6000),
        });

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json(data, { status: response.status });
        } else {
          const errText = await response.text();
          console.warn(`[Backend Proxy] ${targetUrl} returned status ${response.status}: ${errText}`);
          lastError = errText;
        }
      } catch (err: any) {
        // Continue to next candidate URL
        lastError = err?.message || String(err);
      }
    }

    console.error('[Backend Proxy Error] All backend candidate URLs failed. Last error:', lastError);
    return NextResponse.json(
      { error: 'Could not communicate with backend', details: lastError },
      { status: 502 }
    );
  } catch (error: any) {
    console.error('[API Route Order Error]:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error?.message },
      { status: 500 }
    );
  }
}
