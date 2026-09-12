import { NextRequest, NextResponse } from 'next/server';
import { fetchBackend } from '@/lib/backend';

async function proxy(req: NextRequest) {
  const query = req.nextUrl.searchParams.toString();
  const target = `/api/v1/redirects${query ? `?${query}` : ''}`;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const auth = req.headers.get('authorization');
  if (auth) headers.Authorization = auth;

  let body: string | undefined;
  if (req.method !== 'GET') {
    try {
      body = await req.text();
    } catch {
      body = undefined;
    }
  }

  const response = await fetchBackend(target, {
    method: req.method,
    headers,
    body: body || undefined,
  });

  if (!response) {
    return NextResponse.json({ error: 'Backend unreachable' }, { status: 502 });
  }

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: { 'Content-Type': response.headers.get('Content-Type') || 'application/json' },
  });
}

export const GET = proxy;
export const POST = proxy;
