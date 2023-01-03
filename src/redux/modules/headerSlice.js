import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  category: [],
  MAGAZINE: [],
  SHOP: [],
  login: false,
  cartItemCount: "",
};

// thunk
export const __getHeader = createAsyncThunk(
  "header/getHeader",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`header`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getHeader.fulfilled, (state, action) => {
      state.category = action.payload.data.category;
      state.MAGAZINE = action.payload.data.MAGAZINE;
      state.SHOP = action.payload.data.SHOP;
      state.login = action.payload.data.login;
      state.cartItemCount = action.payload.data.cartItemCount;
    });
    builder.addCase(__getHeader.rejected, (state, action) => {
      console.log(action.payload.response.data.msg);
    });
  },
});

export const {} = headerSlice.actions;
export default headerSlice.reducer;
