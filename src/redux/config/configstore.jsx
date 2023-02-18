import { configureStore } from "@reduxjs/toolkit";
import emotionDiary from "../modules/emotionDiarySlice";
import dailyTodo from "../modules/dailysSlice";
import category from "../modules/categorySlice";
import favorite from "../modules/favoriteSlice";
import search from "../modules/searchSlice";
import mainTodo from "../modules/mainSlice";

const store = configureStore({
  reducer: {
    emotionDiary,
    dailyTodo,
    category,
    favorite,
    search,
    mainTodo,
  },
});

export default store;
