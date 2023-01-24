import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";
import bullet_main from "../modules/bulletTodoSlice";
import category from "../modules/categorySlice";
import favorite from "../modules/favoriteSlice";

const store = configureStore({
  reducer: {
    header,
    bullet_main,
    category,
    favorite,
  },
});

export default store;
