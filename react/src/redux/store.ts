import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice.js";
import cartSlice from "./CartSlice.js";
import compareSlice from "./compareSlice.js";
import orderSlice from "./OrderSlice.js";
import productSlice from "./productSlice.js";

export const store = configureStore({
  reducer: {
    fav: favSlice,
    cart: cartSlice,
    compare: compareSlice,
    order: orderSlice,
    Allproducts: productSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
