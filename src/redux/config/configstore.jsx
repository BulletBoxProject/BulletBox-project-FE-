import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";
import dailyTodo from "../modules/dailysSlice";
import category from "../modules/categorySlice";
import favorite from "../modules/favoriteSlice";
import mainTodo from "../modules/mainSlice";

const store = configureStore({
  reducer: {
    header,
    dailyTodo,
    category,
    favorite,
    mainTodo,
  },
});

export default store;
