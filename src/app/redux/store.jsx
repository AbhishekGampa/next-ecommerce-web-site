import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer/produxtsreducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
