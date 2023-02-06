import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getDiary = createAsyncThunk(
  "emotionDiary/getEmotionDiary",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`diaries`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDiaryDate = createAsyncThunk(
  "emotionDiary/getEmotionDiaryDate",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(
        `diaries/date?year=${payload.year}&month=${payload.month}&day=${payload.day}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDiaryMonth = createAsyncThunk(
  "emotionDiary/getEmotionDiaryMonth",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(
        `diaries/calendars?year=${payload.year}&month=${payload.month}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postDiary = createAsyncThunk(
  "emotionDiary/postEmotionDiary",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.post(`diaries`, payload);
      console.log(data, "저장 후 받은값");
      return thunkAPI.fulfillWithValue(data.data);
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
        state.emotionDiary = action.payload;
      })
      .addCase(__getDiaryDate.fulfilled, (state, action) => {
        state.emotionDiary.diary = action.payload;
      })
      .addCase(__getDiaryMonth.fulfilled, (state, action) => {
        state.emotionDiary.emotions = action.payload.emotions;
      })
      .addCase(__postDiary.fulfilled, (state, action) => {
        console.log(action.payload, "저장후 payload");
        state.emotionDiary.diary = action.payload.diary;
        const addEmotions = {
          day: action.payload.diary.day,
          emotion: action.payload.diary.emotion,
        };
        state.emotionDiary.emotions = [
          ...state.emotionDiary.emotions,
          addEmotions,
        ];
        // const DiaryEmotions = [...state.emotionDiary.emotions];
        // state.emotionDiary.emotions = state.emotionDiary.emotions.map(
        //   (value) => {
        //     if (value === value) {
        //       if (value.day === addEmotions.day) {
        //         return {
        //           ...value,
        //           emotion: addEmotions.emotion,
        //         };
        //       }
        //       return value;
        //     } else {
        //       state.emotionDiary.emotions = [
        //         ...state.emotionDiary.emotions,
        //         addEmotions,
        //       ];
        //     }
        //   }
        // );

        // if (state.emotionDiary.emotions === DiaryEmotions) {
        //   state.emotionDiary.emotions = [
        //     ...state.emotionDiary.emotions,
        //     addEmotions,
        //   ];
        // } else {
        //   return state.emotionDiary.emotions;
        // }
      });
  },
});

export const {} = emotionDiarySlice.actions;
export default emotionDiarySlice.reducer;
