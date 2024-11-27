import { create } from 'zustand';
import cartItems from '../constants/cartItem';

const useCartStore = create((set, get) => ({
    cartItems: cartItems,
    amount: 0,
    total: 0,
  
    increase: (itemId) => {
      set((state) => {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === itemId ? { ...item, amount: item.amount + 1 } : item
        );
        return { cartItems: updatedCartItems };
      });
      get().calculateTotals();
    },
  
    decrease: (itemId) => {
      set((state) => {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === itemId && item.amount > 0
            ? { ...item, amount: item.amount - 1 }
            : item
        );
        return { cartItems: updatedCartItems };
      });
      get().calculateTotals();
    },
  
    removeItem: (itemId) => {
      set((state) => {
        const filteredCartItems = state.cartItems.filter((item) => item.id !== itemId);
        return { cartItems: filteredCartItems };
      });
      get().calculateTotals();
    },
  
    clearCart: () => {
      set({ cartItems: [] });
      get().calculateTotals();
    },
  
    calculateTotals: () => {
      const { cartItems } = get();
      let amount = 0;
      let total = 0;
  
      cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
  
      set({ amount, total });
    },
  }));

  export default useCartStore;
