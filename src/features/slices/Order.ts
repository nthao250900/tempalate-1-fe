import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOrder } from "@types";
import { orderService } from "features/services";

export type TOrderRedux = {
 order: TOrder[] | [];
 isError: boolean;
 isSuccess: boolean;
 isLoading: boolean;
 message: string;
};

const initialState: TOrderRedux = {
 order: [],
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: "",
};

export const getAllOrder = createAsyncThunk(
 "order/all",
 async (userId: string) => {
  try {
   return await orderService.getAllOrder(userId);
  } catch (error: any) {
   const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();
   return message;
  }
 }
);

export const orderSlice = createSlice({
 name: "order",
 initialState,
 reducers: {
  allOrder: (state: TOrderRedux) => {
   state.isLoading = false;
   state.isSuccess = false;
   state.isError = false;
   state.message = "";
  },
 },
 extraReducers(builder) {
  builder
   .addCase(getAllOrder.pending, (state: TOrderRedux) => {
    state.isLoading = true;
   })
   .addCase(getAllOrder.fulfilled, (state: TOrderRedux, action: any) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.order = action.payload;
   })
   .addCase(getAllOrder.rejected, (state: TOrderRedux, action: any) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
   });
 },
});

export const { allOrder } = orderSlice.actions;
export default orderSlice.reducer;
