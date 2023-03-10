import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  category: [],
  isLoading: false,
  error: null,
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
      alert("같은 이름의 카테고리가 존재합니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putCategory = createAsyncThunk(
  "category/putCategory",
  async (payload, thunkAPI) => {
    try {
      const categoryInfo = {
        categoryName: payload.categoryName,
        categoryColor: payload.categoryColor,
      };
      const { data } = await baseURLApiV1.put(
        `categories/${payload.id}`,
        categoryInfo
      );
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
      .addCase(__getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getCategory.fulfilled, (state, action) => {
        state.category = action.payload.data;
      })
      .addCase(__getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__postCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postCategory.fulfilled, (state, action) => {
        state.category.categories = [
          ...state.category.categories,
          action.payload.data,
        ];
      })
      .addCase(__postCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__putCategory.pending, (state) => {
        state.isLoading = true;
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
      })

      .addCase(__deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteCategory.fulfilled, (state, action) => {
        state.category.categories = state.category.categories.filter(
          (value) => {
            return value.categoryId !== action.payload.data.categoryId;
          }
        );
      })
      .addCase(__deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
