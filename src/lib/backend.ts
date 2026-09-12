export const BACKEND_CANDIDATES = [
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

export async function fetchBackend(
  path: string,
  init: RequestInit = {},
  timeoutMs = 4000
): Promise<Response | null> {
  for (const baseUrl of BACKEND_CANDIDATES) {
    const cleanBase = baseUrl.replace(/\/+$/, '');
    try {
      const response = await fetch(`${cleanBase}${path}`, {
        ...init,
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return response;
      }
    } catch {
      // try next candidate
    }
  }
  return null;
}
