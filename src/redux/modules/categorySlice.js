import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getCategory = createAsyncThunk(
  "category/getCategory",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`categories`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCategory = createAsyncThunk(
  "category/addCategory",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.post(`categories`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getCategory.fulfilled, (state, action) => {
      //   state.categoryName = action.payload.data.categoryName;
      state.category = action.payload.data;
    });
    builder.addCase(__postCategory.fulfilled, (state, action) => {
      //   state.categoryName = action.payload.data.categoryName;
      //   state.categoryColor = action.payload.data.categoryColor;
    });
    builder.addCase(__postCategory.rejected, (state, action) => {
      console.log(action.payload.response.data.msg);
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
