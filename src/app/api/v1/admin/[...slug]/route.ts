import { NextRequest, NextResponse } from 'next/server';

const CANDIDATE_URLS = [
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
  'http://localhost:8000',
].filter(Boolean) as string[];

async function proxyRequest(req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');
  const searchParams = req.nextUrl.searchParams.toString();
  const queryString = searchParams ? `?${searchParams}` : '';

  const clientIp =
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || '';
  const authHeader = req.headers.get('authorization') || '';

  let bodyData: any = null;
  if (req.method === 'POST' || req.method === 'PATCH' || req.method === 'PUT') {
    try {
      bodyData = await req.json();
    } catch {
      bodyData = null;
    }
  }

  let lastError = null;

  for (const baseUrl of CANDIDATE_URLS) {
    const cleanBase = baseUrl.replace(/\/+$/, '');
    const targetUrl = `${cleanBase}/api/v1/admin/${path}${queryString}`;

    try {
      const headers: Record<string, string> = {
        'x-forwarded-for': clientIp,
        'user-agent': userAgent,
      };

      if (authHeader) {
        headers['authorization'] = authHeader;
      }
      if (bodyData) {
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(targetUrl, {
        method: req.method,
        headers,
        body: bodyData ? JSON.stringify(bodyData) : undefined,
        signal: AbortSignal.timeout(4000),
      });

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
      } else {
        const text = await response.text();
        return new NextResponse(text, {
          status: response.status,
          headers: { 'content-type': contentType || 'text/plain' },
        });
      }
    } catch (err: any) {
      lastError = err?.message || String(err);
    }
  }

  return NextResponse.json(
    {
      detail: 'تعذر الاتصال بالخادم الخلفي (Backend Server Unreachable). يرجى التأكد من تشغيل الباك اند في Easypanel أو محلياً وعمل Redeploy لأحدث كود.',
      lastError,
    },
    { status: 502 }
  );
}

export async function GET(req: NextRequest, ctx: any) {
  return proxyRequest(req, ctx);
}

export async function POST(req: NextRequest, ctx: any) {
  return proxyRequest(req, ctx);
}

export async function PATCH(req: NextRequest, ctx: any) {
  return proxyRequest(req, ctx);
}

export async function DELETE(req: NextRequest, ctx: any) {
  return proxyRequest(req, ctx);
}
