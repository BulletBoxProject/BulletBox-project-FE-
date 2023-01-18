import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";
import { current } from "@reduxjs/toolkit";

// 초기값 설정
const initialState = {
  category: [],
};

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

export const __deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.delete(`categories/${payload}`);
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
    builder
      .addCase(__getCategory.fulfilled, (state, action) => {
        state.category = action.payload.data;
      })

      .addCase(__postCategory.fulfilled, (state, action) => {
        console.log(current(state), "state2");
        state.category.categories = [
          ...state.category.categories,
          action.payload.data,
        ];
      })
      .addCase(__postCategory.rejected, (state, action) => {
        console.log(action.payload.response.data.msg);
      })

      .addCase(__deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload.data, "delete");
      })
      .addCase(__deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
