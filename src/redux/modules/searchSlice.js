import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

// thunk
export const __getSearch = createAsyncThunk(
  "search/getSearch",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await baseURLApiV1.get(
        `todos/search?todoContent=${payload}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getSearch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.search = action.payload.data;
    });
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
