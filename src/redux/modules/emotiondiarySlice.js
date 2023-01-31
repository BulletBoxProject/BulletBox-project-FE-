import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  emotiondiary: {},
};

// thunk
export const __getDiary = createAsyncThunk(
  "emotiondiary/getDiary",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`diaries`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDiaryDate = createAsyncThunk(
  "emotiondiary/getDiaryDate",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await baseURLApiV1.get(
        `diaries/date?year=${payload.year}&month=${payload.month}&day=${payload.day}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postDiary = createAsyncThunk(
  "emotiondiary/postDiary",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.post(`diaries`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const emotiondiarySlice = createSlice({
  name: "emotiondiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDiary.fulfilled, (state, action) => {
        console.log(action.payload);
        state.emotiondiary = action.payload.data;
      })
      .addCase(__getDiaryDate.fulfilled, (state, action) => {
        console.log(action.payload);
        state.emotiondiary.emotiondiary = action.payload.data;
        console.log(state.emotiondiary.emotiondiary);
      })
      .addCase(__postDiary.fulfilled, (state, action) => {
        state.emotiondiary.emotiondiary = action.payload.data;
      });
  },
});

export const {} = emotiondiarySlice.actions;
export default emotiondiarySlice.reducer;
