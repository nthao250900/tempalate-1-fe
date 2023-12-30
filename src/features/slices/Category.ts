import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@types";
import { categoryService } from "features/services";

export type TCategoryRedux = {
 category: TCategory[] | [];
 isError: boolean;
 isSuccess: boolean;
 isLoading: boolean;
 message: string;
};

const initialState: TCategoryRedux = {
 category: [],
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: "",
};

export const getAllCategory = createAsyncThunk("category/all", async () => {
 try {
  return await categoryService.getAllCategory();
 } catch (error: any) {
  const message =
   (error.response && error.response.data && error.response.data.message) ||
   error.message ||
   error.toString();
  return message;
 }
});

export const categorySlice = createSlice({
 name: "category",
 initialState,
 reducers: {
  allCategory: (state: TCategoryRedux) => {
   state.isLoading = false;
   state.isSuccess = false;
   state.isError = false;
   state.message = "";
  },
 },
 extraReducers(builder) {
  builder
   .addCase(getAllCategory.pending, (state: TCategoryRedux) => {
    state.isLoading = true;
   })
   .addCase(getAllCategory.fulfilled, (state: TCategoryRedux, action: any) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.category = action.payload;
   })
   .addCase(getAllCategory.rejected, (state: TCategoryRedux, action: any) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
   });
 },
});

export const { allCategory } = categorySlice.actions;
export default categorySlice.reducer;
