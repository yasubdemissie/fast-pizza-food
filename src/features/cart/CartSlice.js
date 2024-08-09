import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity++;
    },
    dcreaseQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity--;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
console.log(cartSlice);
export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  dcreaseQuantity,
  clearCart,
} = cartSlice.actions;
