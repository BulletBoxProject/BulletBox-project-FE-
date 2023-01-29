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
export const __getMainCalendar = createAsyncThunk(
  "main/getMainCalendar",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
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
      .addCase(__getMainCalendar.fulfilled, (state, action) => {
        state.mainTodo = action.payload;
      });
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
