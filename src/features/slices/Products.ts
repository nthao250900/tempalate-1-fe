import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import { productService } from "features/services";

export type TProductRedux = {
 product: TProduct[] | [];
 isError: boolean;
 isSuccess: boolean;
 isLoading: boolean;
 message: string;
};

const initialState: TProductRedux = {
 product: [],
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: "",
};

export const getAllProduct = createAsyncThunk("product/all", async () => {
 try {
  return await productService.getAllProduct();
 } catch (error: any) {
  const message =
   (error.response && error.response.data && error.response.data.message) ||
   error.message ||
   error.toString();
  return message;
 }
});

export const productSlice = createSlice({
 name: "product",
 initialState,
 reducers: {
  allProduct: (state: TProductRedux) => {
   state.isLoading = false;
   state.isSuccess = false;
   state.isError = false;
   state.message = "";
  },
 },
 extraReducers(builder) {
  builder
   .addCase(getAllProduct.pending, (state: TProductRedux) => {
    state.isLoading = true;
   })
   .addCase(getAllProduct.fulfilled, (state: TProductRedux, action: any) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.product = action.payload;
   })
   .addCase(getAllProduct.rejected, (state: TProductRedux, action: any) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
   });
 },
});

export const { allProduct } = productSlice.actions;
export default productSlice.reducer;
