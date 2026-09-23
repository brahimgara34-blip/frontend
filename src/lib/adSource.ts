export type AdSourceId = 'meta' | 'tiktok' | 'snapchat' | 'google' | 'direct' | 'unknown';

export interface AdSource {
  id: AdSourceId;
  label: string;
}

function parseLanding(raw: string): URL | null {
  try {
    return new URL(raw, 'https://vitalismaroc.shop');
  } catch {
    return null;
  }
}

export function detectAdSource(landingUrl?: string | null): AdSource {
  const raw = (landingUrl || '').trim();
  if (!raw) return { id: 'unknown', label: 'غير محدد' };

  const parsed = parseLanding(raw);
  const query = parsed
    ? `${parsed.search}&${parsed.hash}`.toLowerCase()
    : raw.toLowerCase();
  const utm = (parsed?.searchParams.get('utm_source') || '').toLowerCase();
  const medium = (parsed?.searchParams.get('utm_medium') || '').toLowerCase();
  const haystack = `${raw} ${utm} ${medium}`.toLowerCase();

  if (
    parsed?.searchParams.has('fbclid') ||
    query.includes('fbclid=') ||
    ['facebook', 'fb', 'meta', 'instagram', 'ig', 'fbads'].includes(utm)
  ) {
    return { id: 'meta', label: 'Meta' };
  }

  if (
    parsed?.searchParams.has('ttclid') ||
    query.includes('ttclid=') ||
    ['tiktok', 'tt', 'tiktokads', 'bytedance'].includes(utm) ||
    haystack.includes('tiktok')
  ) {
    return { id: 'tiktok', label: 'TikTok' };
  }

  if (
    parsed?.searchParams.has('ScCid') ||
    parsed?.searchParams.has('sccid') ||
    query.includes('sccid=') ||
    ['snapchat', 'snap', 'snapads'].includes(utm) ||
    haystack.includes('snapchat')
  ) {
    return { id: 'snapchat', label: 'Snapchat' };
  }

  if (
    parsed?.searchParams.has('gclid') ||
    query.includes('gclid=') ||
    ['google', 'googleads', 'youtube'].includes(utm)
  ) {
    return { id: 'google', label: 'Google' };
  }

  if (utm || parsed?.searchParams.toString()) {
    return { id: 'direct', label: 'أورغانيك / رابط' };
  }

  return { id: 'direct', label: 'مباشر' };
}

export function adSourceBadgeClass(id: AdSourceId): string {
  switch (id) {
    case 'meta':
      return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
    case 'tiktok':
      return 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30';
    case 'snapchat':
      return 'bg-amber-400/15 text-amber-300 border-amber-400/30';
    case 'google':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    case 'direct':
      return 'bg-slate-700/60 text-slate-300 border-slate-600';
    default:
      return 'bg-slate-800 text-slate-500 border-slate-700';
  }
}
