import { configureStore } from "@reduxjs/toolkit";
import {
 AuthSlice,
 CartSlice,
 CategorySlice,
 OrderSlice,
 ProductSlice,
 WishlistSlice,
} from "features/slices";

export const store = configureStore({
 reducer: {
  auth: AuthSlice,
  products: ProductSlice,
  category: CategorySlice,
  cart: CartSlice,
  wishlist: WishlistSlice,
  order: OrderSlice,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
