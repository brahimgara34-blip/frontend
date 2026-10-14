import { create } from 'zustand';
import { Product } from '@/lib/products';
import { trackAddToCart } from '@/lib/pixel';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedTier: number; // 1, 2, or 3
  tierPrice: number;
  selectedColor?: string; // e.g. "Chromé", "Noir Mat"
}

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  isCheckoutOpen: boolean;
  isUpsellOpen: boolean;
  activeUpsellProduct: Product | null;
  lastOrder: any | null;
  pendingCustomerName: string;
  pendingCustomerPhone: string;

  // Actions
  addItem: (product: Product, quantity: number, color?: string, options?: { replace?: boolean }) => void;
  removeItem: (productId: string) => void;
  updateItemQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  
  openDrawer: () => void;
  closeDrawer: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  openUpsell: (product: Product, customerName: string, customerPhone: string) => void;
  closeUpsell: () => void;
  setLastOrder: (order: any) => void;

  // Computations
  getTotalPrice: () => number;
  getTotalItemsCount: () => number;
}

export function priceForQuantity(product: Product, quantity: number): number {
  const tiers = [...product.offerTiers].sort((a, b) => a.tier - b.tier);
  if (tiers.length === 0 || quantity <= 0) return 0;
  const exact = tiers.find((t) => t.tier === quantity);
  if (exact) return exact.price;
  // Units beyond the largest bundle are charged at the single-unit price, never discounted further.
  const largest = [...tiers].reverse().find((t) => t.tier <= quantity) ?? tiers[0];
  return largest.price + (quantity - largest.tier) * tiers[0].price;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isDrawerOpen: false,
  isCheckoutOpen: false,
  isUpsellOpen: false,
  activeUpsellProduct: null,
  lastOrder: null,
  pendingCustomerName: '',
  pendingCustomerPhone: '',

  addItem: (product, quantity, color, options) => {
    const tierPrice = priceForQuantity(product, quantity);
    trackAddToCart({ id: product.id, name: product.name }, tierPrice, quantity);

    const line = {
      id: product.id,
      product,
      quantity,
      selectedTier: quantity,
      tierPrice,
      selectedColor: color,
    };

    if (options?.replace) {
      set({ items: [line], isDrawerOpen: false });
      return;
    }

    set((state) => {
      const existingIndex = state.items.findIndex((item) => item.id === product.id);
      let newItems = [...state.items];
      
      if (existingIndex > -1) {
        const newQty = state.items[existingIndex].quantity + quantity;
        newItems[existingIndex] = {
          ...state.items[existingIndex],
          quantity: newQty,
          selectedTier: newQty,
          tierPrice: priceForQuantity(product, newQty),
          selectedColor: color ?? state.items[existingIndex].selectedColor,
        };
      } else {
        newItems.push({ ...line, selectedColor: color ?? undefined });
      }

      return {
        items: newItems,
        isDrawerOpen: true,
      };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  updateItemQuantity: (productId, delta) => {
    set((state) => {
      const newItems = state.items
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
          
          return {
            ...item,
            quantity: newQty,
            selectedTier: newQty,
            tierPrice: priceForQuantity(item.product, newQty),
          };
          }
          return item;
        })
        .filter(Boolean) as CartItem[];

      return { items: newItems };
    });
  },

  clearCart: () => set({ items: [] }),

  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  openCheckout: () => set({ isCheckoutOpen: true, isDrawerOpen: false }),
  closeCheckout: () => set({ isCheckoutOpen: false }),
  openUpsell: (product, customerName, customerPhone) => set({
    isUpsellOpen: true,
    activeUpsellProduct: product,
    isCheckoutOpen: false,
    pendingCustomerName: customerName,
    pendingCustomerPhone: customerPhone,
  }),
  closeUpsell: () => set({ isUpsellOpen: false, activeUpsellProduct: null, pendingCustomerName: '', pendingCustomerPhone: '' }),
  setLastOrder: (order) => set({ lastOrder: order }),

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.tierPrice, 0);
  },

  getTotalItemsCount: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));
