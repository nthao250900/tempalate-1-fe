import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import { message } from "antd";

const wishListItems = localStorage.getItem("wishList");
const initialState = {
 wishListItem: wishListItems ? JSON.parse(wishListItems) : [],
};
const wishListItemSlice = createSlice({
 name: "wishList",
 initialState,
 reducers: {
  addToWishList: (state: any, action: { payload: TProduct }) => {
   const itemIndex = state.wishListItem?.findIndex(
    (item: any) => item.productId === action.payload.productId
   );
   if (itemIndex >= 0) {
    message.error("Sản phẩm đã có trong danh sách yêu thích.");
   } else {
    message.success("Đã thêm thành công sản phẩm yêu thích.");
    state.wishListItem.push(action.payload);
    localStorage.setItem("wishList", JSON.stringify(state.wishListItem));
   }
  },
  removeWishList: (state: any, action: { payload: TProduct | undefined }) => {
   const removeItem = state.wishListItem.filter(
    (e: any) => e.productId !== action.payload?.productId
   );
   state.wishListItem = removeItem;
   localStorage.setItem("wishList", JSON.stringify(state.wishListItem));
   message.success("Xóa khỏi danh sách yêu thích thành công.");
  },
 },
});

export const { addToWishList, removeWishList } = wishListItemSlice.actions;
export default wishListItemSlice.reducer;
