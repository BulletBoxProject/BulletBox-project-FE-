import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";
import bullet_main from "../modules/bulletTodoSlice";
import category from "../modules/categorySlice";
import favorite from "../modules/favoriteSlice";
import search from "../modules/searchSlice";

const store = configureStore({
  reducer: {
    header,
    bullet_main,
    category,
    favorite,
    search,
  },
});

export default store;
