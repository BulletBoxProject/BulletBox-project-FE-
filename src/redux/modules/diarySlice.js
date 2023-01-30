import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getDiary = createAsyncThunk(
  "diary/getDiary",
  async (payload, thunkAPI) => {
    try {
      console.log(payload, "post");
      const { data } = await baseURLApiV1.get(`diaries`, payload);
      console.log(data, "data");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postDiary = createAsyncThunk(
  "diary/postDiary",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await baseURLApiV1.post(`diaries`, payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDiary.fulfilled, (state, action) => {
        console.log(action.payload);
        state.diary = action.payload.data;
      })
      .addCase(__postDiary.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.diary = action.payload.data;
        // state.diary.diary = [...state.diary.diary, action.payload];
      });
  },
});

export const {} = diarySlice.actions;
export default diarySlice.reducer;
