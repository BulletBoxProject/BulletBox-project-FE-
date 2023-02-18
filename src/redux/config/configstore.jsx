import { configureStore } from "@reduxjs/toolkit";

import dailyTodo from "../modules/dailysSlice";
import category from "../modules/categorySlice";
import favorite from "../modules/favoriteSlice";
import search from "../modules/searchSlice";
import mainTodo from "../modules/mainSlice";
import emotionDiary from "../modules/emotiondiarySlice";

const store = configureStore({
  reducer: {
    dailyTodo,
    category,
    favorite,
    search,
    mainTodo,
    emotionDiary,
  },
});

export default store;
