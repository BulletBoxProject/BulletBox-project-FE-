import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";
import bullet_main from "../modules/bulletTodoSlice";

const store = configureStore({
  reducer: {
    header,
    bullet_main,
  },
});

export default store;
