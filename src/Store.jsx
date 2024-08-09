import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import CartSlice from "./features/cart/CartSlice";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        cartReducer: CartSlice,
    }
});

export default store;