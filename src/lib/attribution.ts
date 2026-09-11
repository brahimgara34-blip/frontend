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

/**
 * First-touch landing URL, including UTM / click IDs.
 * Saved once on the customer's first page and never overwritten.
 */
export function captureFirstLandingUrl(): string {
  if (typeof window === 'undefined') return '';

  const existing = readStoredLandingUrl();
  if (existing) return existing;

  const landingUrl = window.location.href;
  if (!landingUrl) return '';

  writeStoredLandingUrl(landingUrl);
  return landingUrl;
}

export function getFirstLandingUrl(): string {
  if (typeof window === 'undefined') return '';
  return readStoredLandingUrl() || window.location.href || '';
}
