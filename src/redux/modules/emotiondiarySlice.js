import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getDiary = createAsyncThunk(
  "emotiondiary/getDiary",
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
  "emotiondiary/postDiary",
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
      .addCase(__postDiary.fulfilled, (state, action) => {
        state.emotiondiary.emotiondiary = action.payload.data;
      });
  },
});

export const {} = emotiondiarySlice.actions;
export default emotiondiarySlice.reducer;
