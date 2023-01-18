import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";
import bullet_main from "../modules/bulletTodoSlice";
import category from "../modules/categorySlice";

const store = configureStore({
  reducer: {
    header,
    bullet_main,
    category,
  },
});

export default store;
