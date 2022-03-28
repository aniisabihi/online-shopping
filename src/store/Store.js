import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "../slices/quantitySlice";

export const store = configureStore({
  reducer: {
    quantity: quantityReducer,
  },
});
