// Client-side Pixel Utilities for Meta, TikTok, and Snapchat

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
 * Track PageView across all active pixels
 */
export const trackPageView = () => {
  if (typeof window === 'undefined') return;

  // Meta Pixel
  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'PageView');
  }

  // TikTok Pixel
  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.page();
  }

  // Snapchat Pixel
  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'PAGE_VIEW');
  }
};

/**
 * Track ViewContent
 */
export const trackViewContent = (product: { id: string; name: string; price?: number }) => {
  if (typeof window === 'undefined') return;

  // Meta
  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'ViewContent', {
      content_name: product.name,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price || 249,
      currency: 'MAD',
    });
  }

  // TikTok
  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.track('ViewContent', {
      content_id: product.id,
      content_type: 'product',
      content_name: product.name,
      price: product.price || 249,
      currency: 'MAD',
    });
  }

  // Snapchat
  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr('track', 'VIEW_CONTENT', {
      item_ids: [product.id],
      price: product.price || 249,
      currency: 'MAD',
    });
  }
};

/**
 * Track AddToCart
 */
export const trackAddToCart = (product: { id: string; name: string }, value: number, quantity: number = 1) => {
  if (typeof window === 'undefined') return;

  // Meta
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

  // TikTok
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

  // Snapchat
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

  // Meta
  if (window.fbq && META_PIXEL_ID) {
    window.fbq('track', 'InitiateCheckout', {
      content_ids: items.map((i) => i.id),
      content_type: 'product',
      value: total,
      currency: 'MAD',
      num_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
    });
  }

  // TikTok
  if (window.ttq && TIKTOK_PIXEL_ID) {
    window.ttq.track('InitiateCheckout', {
      contents: items.map((i) => ({ content_id: i.id, content_name: i.name, quantity: i.quantity })),
      value: total,
      currency: 'MAD',
    });
  }

  // Snapchat
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
  eventId: string
) => {
  if (typeof window === 'undefined') return;

  // Meta Pixel with eventID for deduplication with CAPI
  if (window.fbq && META_PIXEL_ID) {
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

  // TikTok Pixel with event_id
  if (window.ttq && TIKTOK_PIXEL_ID) {
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

  // Snapchat Pixel with event_tag
  if (window.snaptr && SNAPCHAT_PIXEL_ID) {
    window.snaptr(
      'track',
      'PURCHASE',
      {
        item_ids: items.map((i) => i.id),
        price: total,
        currency: 'MAD',
        number_items: items.reduce((acc, curr) => acc + curr.quantity, 0),
        transaction_id: orderId,
      },
      { event_tag: eventId }
    );
  }
};
