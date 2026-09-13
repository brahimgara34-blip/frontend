import { NextRequest, NextResponse } from 'next/server';

const CANDIDATE_URLS = [
  process.env.INTERNAL_BACKEND_URL,
  process.env.BACKEND_URL,
  'https://api.vitalismaroc.shop',
  'http://backend:8000',
  'http://vitalismaroc_backend:8000',
  'http://vitalismaroc-backend:8000',
  process.env.NEXT_PUBLIC_API_URL,
  'http://191.215.41.119:8000',
  'http://api.vitalismaroc.shop',
].filter(Boolean) as string[];

function uniqueUrls(urls: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const url of urls) {
    const clean = url.replace(/\/+$/, '');
    if (!clean || seen.has(clean)) continue;
    seen.add(clean);
    out.push(clean);
  }
  return out;
}

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

  let lastStatus = 0;
  let lastBody: any = { detail: 'تعذر الوصول إلى الخادم الخلفي' };

  for (const cleanBase of uniqueUrls(CANDIDATE_URLS)) {
    const targetUrl = `${cleanBase}/api/v1/admin/${path}${queryString}`;

    try {
      const headers: Record<string, string> = {
        'x-forwarded-for': clientIp,
        'user-agent': userAgent,
      };

      if (authHeader) {
        headers.authorization = authHeader;
      }
      if (bodyData) {
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(targetUrl, {
        method: req.method,
        headers,
        body: bodyData ? JSON.stringify(bodyData) : undefined,
        signal: AbortSignal.timeout(15000),
      });

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      const data = isJson ? await response.json().catch(() => null) : await response.text();

      if (response.ok || response.status === 401 || response.status === 403) {
        if (isJson && data !== null) {
          return NextResponse.json(data, { status: response.status });
        }
        return new NextResponse(typeof data === 'string' ? data : '', {
          status: response.status,
          headers: { 'content-type': contentType || 'text/plain' },
        });
      }

      lastStatus = response.status;
      lastBody = data || lastBody;
    } catch {
      lastStatus = 502;
    }
  }

  return NextResponse.json(
    {
      detail: 'تعذر قراءة الطلبات من قاعدة البيانات. الباكند غير متصل.',
      source: 'disconnected',
      orders: [],
      total: 0,
      page: 1,
      limit: 50,
      pages: 0,
    },
    { status: lastStatus >= 400 ? lastStatus : 502 }
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
