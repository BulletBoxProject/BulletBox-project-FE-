import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

//thunk
export const __getMainTodo = createAsyncThunk(
  "main/getMainTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`main`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getCalendarTodoCount = createAsyncThunk(
  "main/getCalendarTodoCount",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await baseURLApiV1.get(
        `/main/calendars?year=${payload.year}&month=${Number(payload.month)}`
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data?.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getSelectDateTodo = createAsyncThunk(
  "main/getSelectDateTodo",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await baseURLApiV1.get(
        `/main/dailys?year=${payload.year}&month=${payload.month}&day=${payload.day}`
      );
      console.log(data.data?.daily);
      return thunkAPI.fulfillWithValue(data?.data?.daily);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const mainSlice = createSlice({
  name: "mainTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getMainTodo.fulfilled, (state, action) => {
        state.mainTodo = action.payload;
      })
      .addCase(__getCalendarTodoCount.fulfilled, (state, action) => {
        state.mainTodo.calendar = action.payload.data;
      })
      .addCase(__getSelectDateTodo.fulfilled, (state, action) => {
        state.mainTodo.daily = action.payload;
      });
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
