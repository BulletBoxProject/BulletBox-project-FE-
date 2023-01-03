import { configureStore } from "@reduxjs/toolkit";

import header from "../modules/headerSlice";

const store = configureStore({
  reducer: {
    header,
  },
});

export default store;
