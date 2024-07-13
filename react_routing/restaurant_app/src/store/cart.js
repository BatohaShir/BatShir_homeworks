import create from 'zustand';

export const useShopCart = create((set) => ({
  shopcart: [],

  addItem: (item) => set((state) => ({
    shopcart: [...state.shopcart, item]
  })),

  removeItem: (itemName) => set((state) => {
    const index = state.shopcart.findIndex(item => item.name === itemName);
    if (index > -1) {
      const newshopcart = [...state.shopcart];
      newshopcart.splice(index, 1);
      return { shopcart: newshopcart }
    }
    return state;
  }) 
}));
