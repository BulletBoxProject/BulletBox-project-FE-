import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk

export const __postFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await baseURLApiV1.post(`favorites`, payload);
      alert(data.msg);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("같은 이름의 카테고리가 존재합니다.");
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
    builder.addCase(__postFavorite.fulfilled, (state, action) => {
      // state.category.categories = [
      //   ...state.category.categories,
      //   action.payload.data,
      // ];
    });
  },
});

export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;
