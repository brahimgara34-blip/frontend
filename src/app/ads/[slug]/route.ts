import { NextRequest, NextResponse } from 'next/server';
import { fetchBackend } from '@/lib/backend';

function mergeDestination(origin: string, destination: string, incoming: URLSearchParams): string {
  const destUrl = destination.startsWith('http')
    ? new URL(destination)
    : new URL(destination || '/', origin);

  incoming.forEach((value, key) => {
    destUrl.searchParams.set(key, value);
  });

  return destUrl.toString();
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const response = await fetchBackend(`/api/v1/redirects/resolve/${encodeURIComponent(slug)}`);

  if (!response || !response.ok) {
    return new NextResponse('رابط الإعلان غير موجود', { status: 404 });
  }

  const data = await response.json();
  const destination = String(data.destination || '').trim();
  if (!destination) {
    return new NextResponse('رابط الإعلان غير موجود', { status: 404 });
  }

  const finalUrl = mergeDestination(req.nextUrl.origin, destination, req.nextUrl.searchParams);
  return NextResponse.redirect(finalUrl, 307);
}
