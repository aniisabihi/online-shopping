import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "../features/quantity/quantitySlice";

export const store = configureStore({
  reducer: {
    quantity: quantityReducer,
  },
});
