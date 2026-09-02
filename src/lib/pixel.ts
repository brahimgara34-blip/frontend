// Client-side Pixel Utilities for Meta, TikTok, Snapchat, and Server-Side Visitor Analytics

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
    ttq?: any;
    snaptr?: any;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
export const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '';
export const SNAPCHAT_PIXEL_ID = process.env.NEXT_PUBLIC_SNAPCHAT_PIXEL_ID || '';

/**
 * Track PageView across all active pixels and register Clean Moroccan Click in Backend
 */
export const trackPageView = (customPath?: string) => {
  if (typeof window === 'undefined') return;

  const currentPath = customPath || window.location.pathname || '/';

  // 1. Meta Pixel
  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'PageView');
  }

  // 2. TikTok Pixel
  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.page();
  }

  // 3. Snapchat Pixel
  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'PAGE_VIEW');
  }

  // 4. Server-Side Clean Moroccan Visitor & VPN-filtered Click Tracker
  // Don't track admin dashboard pageviews as customer clicks
  if (!currentPath.startsWith('/admin')) {
    try {
      // Use navigator.sendBeacon if available for non-blocking telemetry
      const payload = JSON.stringify({
        path: currentPath,
        referrer: document.referrer || '',
        session_id: getOrCreateSessionId(),
      });

      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon('/api/v1/analytics/click', blob);
      } else {
        fetch('/api/v1/analytics/click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch (err) {
      // Fail silently to never impact user experience
    }
  }
};

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return '';
  try {
    let sid = sessionStorage.getItem('vm_session_id');
    if (!sid) {
      sid = 'vm_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      sessionStorage.setItem('vm_session_id', sid);
    }
    return sid;
  } catch {
    return 'vm_' + Date.now();
  }
}

/**
 * Track ViewContent
 */
export const trackViewContent = (product: { id: string; name: string; price?: number }) => {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'ViewContent', {
      content_name: product.name,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price || 199,
      currency: 'MAD',
    });
  }

  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.track('ViewContent', {
      content_id: product.id,
      content_type: 'product',
      content_name: product.name,
      price: product.price || 199,
      currency: 'MAD',
    });
  }

  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'VIEW_CONTENT', {
      item_ids: [product.id],
      price: product.price || 199,
      currency: 'MAD',
    });
  }
};

/**
 * Track AddToCart
 */
export const trackAddToCart = (product: { id: string; name: string }, value: number, quantity: number = 1) => {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'AddToCart', {
      content_name: product.name,
      content_ids: [product.id],
      content_type: 'product',
      value: value,
      currency: 'MAD',
      num_items: quantity,
    });
  }

  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.track('AddToCart', {
      content_id: product.id,
      content_type: 'product',
      content_name: product.name,
      quantity: quantity,
      price: value,
      currency: 'MAD',
    });
  }

  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'ADD_CART', {
      item_ids: [product.id],
      price: value,
      currency: 'MAD',
      number_items: quantity,
    });
  }
};

/**
 * Track InitiateCheckout
 */
export const trackInitiateCheckout = (total: number, items: Array<{ id: string; name: string; quantity: number }>) => {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'InitiateCheckout', {
      content_ids: items.map((i) => i.id),
      content_type: 'product',
      value: total,
      currency: 'MAD',
      num_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
    });
  }

  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.track('InitiateCheckout', {
      contents: items.map((i) => ({ content_id: i.id, content_name: i.name, quantity: i.quantity })),
      value: total,
      currency: 'MAD',
    });
  }

  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'START_CHECKOUT', {
      item_ids: items.map((i) => i.id),
      price: total,
      currency: 'MAD',
      number_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
    });
  }
};

/**
 * Track Purchase with Event Deduplication ID
 */
export const trackPurchase = (
  orderId: string,
  total: number,
  items: Array<{ id: string; name: string; quantity: number; price: number }>,
  eventId: string,
  phone?: string
) => {
  if (typeof window === 'undefined') return;

  if (window.fbq && META_PIXEL_ID) {
    if (phone) {
      window.fbq('init', META_PIXEL_ID, { ph: phone });
    }
    window.fbq(
      'track',
      'Purchase',
      {
        content_name: 'DTC Order',
        content_ids: items.map((i) => i.id),
        content_type: 'product',
        value: total,
        currency: 'MAD',
        num_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
        order_id: orderId,
      },
      { eventID: eventId }
    );
  }

  if (window.ttq && TIKTOK_PIXEL_ID) {
    if (phone) {
      window.ttq.identify({ phone_number: phone });
    }
    window.ttq.track(
      'CompletePayment',
      {
        contents: items.map((i) => ({
          content_id: i.id,
          content_name: i.name,
          quantity: i.quantity,
          price: i.price,
        })),
        value: total,
        currency: 'MAD',
      },
      { event_id: eventId }
    );
  }

  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    if (phone) {
      window.snaptr('init', SNAPCHAT_PIXEL_ID, { user_phone_number: phone });
    }
    window.snaptr(
      'track',
      'PURCHASE',
      {
        item_ids: items.map((i) => i.id),
        price: total,
        currency: 'MAD',
        number_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
        transaction_id: orderId,
        client_dedup_id: eventId,
      }
    );
  }
};
