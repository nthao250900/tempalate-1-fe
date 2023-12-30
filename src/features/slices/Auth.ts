import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "features/services/Auth";

// Get user from localStorage

interface TValueRegister {
 email: string;
 fullName: string;
 username: string;
 password: string;
}

type TLoginResponse = {
 accountId: string;
 accountName: string;
 accountPassword: string;
 accountRole: string;
 address: string | null;
 avatar: string | null;
 email: string;
 fullName: string;
 phoneNumber: string | null;
 userId: string;
 accountActive: number;
};

const user: any = localStorage.getItem("user");

export interface TUserStorage {
 token: string;
 infoUser: TLoginResponse;
}

type TInitialState = {
 user: TUserStorage | null;
 isError: boolean;
 isSuccess: boolean;
 isLoading: boolean;
 message: string;
};

const initialState: TInitialState = {
 user: JSON.parse(user),
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: "",
};

export const register = createAsyncThunk(
 "auth/register",
 async (user: TValueRegister, thunkAPI) => {
  try {
   return await authService.register(user);
  } catch (error: any) {
   const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();
   return message;
  }
 }
);

export const login = createAsyncThunk(
 "auth/login",
 async (parameters: { username: string; password: string }) => {
  try {
   return await authService.login(parameters);
  } catch (error: any) {
   const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();
   return message;
  }
 }
);
export const logout = createAsyncThunk("auth/logout", async () => {
 try {
  return authService.logout();
 } catch (error: any) {
  const message =
   (error.response && error.response.data && error.response.data.message) ||
   error.message ||
   error.toString();
  return message;
 }
});

export const authSlice = createSlice({
 name: "auth",
 initialState,
 reducers: {
  reset: (state: TInitialState) => {
   state.isLoading = false;
   state.isSuccess = false;
   state.isError = false;
   state.message = "";
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(register.pending, (state) => {
    state.isLoading = true;
   })
   .addCase(register.fulfilled, (state: any, action: any) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.user = action.payload;
   })
   .addCase(register.rejected, (state: any, action: any) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    state.user = null;
   })

   // Login
   .addCase(login.pending, (state) => {
    state.isLoading = true;
   })
   .addCase(login.fulfilled, (state: TInitialState, action: any) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.user = action.payload;
   })
   .addCase(login.rejected, (state: TInitialState, action: any) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    state.user = null;
   })
   // Logout
   .addCase(logout.fulfilled, (state: any) => {
    state.user = null;
   });
 },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
