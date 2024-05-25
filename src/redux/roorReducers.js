import { combineReducers } from "@reduxjs/toolkit";
import addToCartReducer from "./../features/addtocart/add.cart";
const rootReducers = combineReducers({
  AddToCart: addToCartReducer,
});
export default rootReducers;
