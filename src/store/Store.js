import { configureStore } from "@reduxjs/toolkit";
import { getTotals } from "./reducers/slices/cartSlice";
import { reducers } from "./reducers/Reducers";

const store = configureStore({ reducer: reducers });

store.dispatch(getTotals());

export default store;
