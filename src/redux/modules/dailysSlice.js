import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApiV1 } from "../../core/api";

// 초기값 설정
const initialState = {};

//thunk
export const __getDailyTodo = createAsyncThunk(
  "dailyLog/getDailyTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`dailys`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getSelectDateTodo = createAsyncThunk(
  "DailyLog/getSelectDateTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`/dailys/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getAddTodo = createAsyncThunk(
  "DailyLog/getAddTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(
        `dailys/todo?${payload}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getEditTodo = createAsyncThunk(
  "editDailyLog/getDailyTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(
        `dailys/todo/${payload}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getFavoritesTodo = createAsyncThunk(
  "DailyLog/getFavoritesTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.get(`/favorites`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postDailyTodo = createAsyncThunk(
  "dailyLog/postDailyTodo",
  async (payload, thunkAPI) => {
    let memos = payload.memos;
    memos = memos.map((memo) =>
      delete memo.memoId === true
        ? {
            ...memo,
            todoMemoContent: memo.todoMemoContent,
          }
        : null
    );
    try {
      const { data } = await baseURLApiV1.post(`/dailys/todo`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postFavoriteTodo = createAsyncThunk(
  "dailyLog/postFavoriteTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.post(`/dailys/favorites`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteDailyTodo = createAsyncThunk(
  "dailyLog/deleteDailyTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApiV1.delete(`dailys/todo/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __putDailyTodo = createAsyncThunk(
  "dailyLog/putDailyTodo",
  async (payload, thunkAPI) => {
    let timeFix = "";
    if (payload.time === null) {
      timeFix = null;
    } else {
      timeFix = `${payload.time.hour}:${payload.time.minute}`;
    }
    const modifiedMemo = payload.memos.map((memo) =>
      delete memo.renderId === true
        ? {
            todoMemoId: memo.todoMemoId,
            todoMemoContent: memo.todoMemoContent,
          }
        : memo
    );
    try {
      const { data } = await baseURLApiV1.put(`/dailys/todo`, {
        ...payload,
        memos: modifiedMemo,
        time: timeFix,
      });
      return thunkAPI.fulfillWithValue({
        ...payload,
        memos: modifiedMemo,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//slice
const dailysSlice = createSlice({
  name: "dailyTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDailyTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getDailyTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoList = action.payload.daily;
        state.categoryList = action.payload.categories;
      })
      .addCase(__getDailyTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(__getSelectDateTodo.fulfilled, (state, action) => {
        state.dailyTodo = action.payload.data;
      })
      .addCase(__getAddTodo.fulfilled, (state, action) => {
        state.dailyTodo = action.payload.data;
      })
      .addCase(__getEditTodo.fulfilled, (state, action) => {
        state.dailyTodo = action.payload.data;
      })
      .addCase(__getFavoritesTodo.fulfilled, (state, action) => {
        state.favorite = action.payload.data;
      })
      .addCase(__postDailyTodo.fulfilled, (state, action) => {
        state.dailyTodo.daily = [...state.dailyTodo.daily, action.payload];
      })
      .addCase(__postFavoriteTodo.fulfilled, (state, action) => {
        state.dailyTodo.daily = [...state.dailyTodo.daily, action.payload.data];
      })
      .addCase(__deleteDailyTodo.fulfilled, (state, action) => {
        state.dailyTodo.daily = state.dailyTodo.daily.filter(
          (dailyLog) => dailyLog.todoId !== action.payload
        );
      })
      .addCase(__putDailyTodo.fulfilled, (state, action) => {
        state.dailyTodo.daily = state?.dailyTodo?.daily?.map((todo) => {
          return todo.todoId === action.payload.todoId ? action.payload : todo;
        });
      });
  },
});

export const {} = dailysSlice.actions;
export default dailysSlice.reducer;
