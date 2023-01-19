import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

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
      alert(data.msg);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("같은 이름의 카테고리가 존재합니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putCategory = createAsyncThunk(
  "category/putCategory",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const categoryInfo = {
        categoryName: payload.categoryName,
        categoryColor: payload.categoryColor,
      };
      const { data } = await baseURLApiV1.put(
        `categories/${payload.id}`,
        categoryInfo
      );
      alert(data.msg);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert("카테고리 수정 실패");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.delete(`categories/${payload}`);
      alert(data.msg);
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
        state.category.categories = [
          ...state.category.categories,
          action.payload.data,
        ];
      })

      .addCase(__putCategory.fulfilled, (state, action) => {
        state.category.categories = state.category.categories.map((value) => {
          if (value.categoryId === action.payload.id) {
            return {
              ...value,
              categoryName: action.payload.categoryName,
              categoryColor: action.payload.categoryColor,
            };
          }
          return value;
        });
        console.log(action.payload);
      })

      .addCase(__deleteCategory.fulfilled, (state, action) => {
        state.category.categories = state.category.categories.filter(
          (value) => {
            return value.categoryId !== action.payload.data.categoryId;
          }
        );
        console.log(action.payload.data, "delete");
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
