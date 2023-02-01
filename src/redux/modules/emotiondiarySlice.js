import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {
  emotionDiary: {},
};

// thunk
export const __getDiary = createAsyncThunk(
  "emotionDiary/getEmotionDiary",
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
  "emotionDiary/getEmotionDiaryDate",
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
  "emotionDiary/postEmotionDiary",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await baseURLApiV1.post(`diaries`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const emotionDiarySlice = createSlice({
  name: "emotionDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDiary.fulfilled, (state, action) => {
        console.log(action.payload);
        state.emotionDiary = action.payload.data;
        console.log(state.emotionDiary, "222");
      })
      .addCase(__getDiaryDate.fulfilled, (state, action) => {
        console.log(action.payload);
        state.emotionDiary.emotionDiary = action.payload.data;
        console.log(state.emotionDiary.emotionDiary, "받아온 날짜 데이터");
      })
      .addCase(__postDiary.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.emotionDiary.emotionDiary = action.payload.data;
      });
  },
});

export const {} = emotionDiarySlice.actions;
export default emotionDiarySlice.reducer;
