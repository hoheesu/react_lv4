import { configureStore } from "@reduxjs/toolkit";
import errorModalReducer from "./modules/errorModalSlice";

export const store = configureStore({
  reducer: {
    errorModal: errorModalReducer,
  },
});
