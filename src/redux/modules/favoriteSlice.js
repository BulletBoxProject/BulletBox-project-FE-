import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`favorites`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (payload, thunkAPI) => {
    try {
      await baseURLApiV1.post(`favorites`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert("루틴 추가를 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putFavorite = createAsyncThunk(
  "favorite/putFavorite",
  async (payload, thunkAPI) => {
    try {
      const id = payload.favoriteId;
      delete payload.favoriteId;
      await baseURLApiV1.put(`favorites/${id}`, payload);
      const data = { favoriteId: id, ...payload };
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("카테고리 수정 실패");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteFavorite = createAsyncThunk(
  "favorite/deleteFavorite",
  async (payload, thunkAPI) => {
    try {
      await baseURLApiV1.delete(`favorites/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert("루틴 삭제를 실패했습니다.");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getFavorite.fulfilled, (state, action) => {
        state.favorite = action.payload.data;
      })
      .addCase(__postFavorite.fulfilled, (state, action) => {
        state.favorite.favorites = [
          ...state.favorite.favorites,
          action.payload,
        ];
      })
      .addCase(__putFavorite.fulfilled, (state, action) => {
        state.favorite.favorites = state.favorite.favorites.map((value) => {
          if (value.favoriteId === action.payload.favoriteId) {
            return {
              ...value,
              favoriteContent: action.payload.favoriteContent,
              favoriteMemos: action.payload.favoriteMemos,
              categoryId: action.payload.categoryId,
              categoryColor: action.payload.categoryColor,
            };
          }
          return value;
        });
      })
      .addCase(__deleteFavorite.fulfilled, (state, action) => {
        state.favorite.favorites = state.favorite.favorites.filter((value) => {
          return value.favoriteId !== action.payload;
        });
      });
  },
});

export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;
