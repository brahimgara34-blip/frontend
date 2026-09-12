const LANDING_URL_KEY = 'vitalis_first_landing_url';

function readStoredLandingUrl(): string {
  if (typeof window === 'undefined') return '';
  try {
    return window.localStorage.getItem(LANDING_URL_KEY) || '';
  } catch {
    return '';
  }
}

function writeStoredLandingUrl(url: string): void {
  try {
    window.localStorage.setItem(LANDING_URL_KEY, url);
  } catch {
    // Private mode or blocked storage — keep the in-memory value only.
  }
}

function isTransientPath(url: string): boolean {
  try {
    const path = new URL(url, window.location.origin).pathname;
    return path.startsWith('/ads/') || path.startsWith('/redirectkiller');
  } catch {
    return false;
  }
}

/**
 * First-touch landing URL after any /ads redirect, including UTM / click IDs.
 * Redirect hops are ignored so the Sheet stores the destination page.
 */
export function captureFirstLandingUrl(): string {
  if (typeof window === 'undefined') return '';

  const currentUrl = window.location.href;
  if (!currentUrl || isTransientPath(currentUrl)) return readStoredLandingUrl();

  const existing = readStoredLandingUrl();
  if (existing && !isTransientPath(existing)) return existing;

  writeStoredLandingUrl(currentUrl);
  return currentUrl;
}

export function getFirstLandingUrl(): string {
  if (typeof window === 'undefined') return '';
  return readStoredLandingUrl() || window.location.href || '';
}
