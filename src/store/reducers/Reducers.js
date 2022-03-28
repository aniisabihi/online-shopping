import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";

const data = require("./../../data.json");

export const reducers = combineReducers({
  products: data,
  cart: cartReducer,
});

export default data;
