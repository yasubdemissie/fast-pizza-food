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
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    dcreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      if(item.quantity === 0) cartSlice.caseReducers.removeItem(action.payload);
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  dcreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cartReducer.cart;
export const getTotalPrice = (state) => state.cartReducer.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getTotalOrder = (state) => state.cartReducer.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getItemById = (id) => (state) => state.cartReducer.cart.find(item => item.pizzaId === id)?.quantity ?? 0;