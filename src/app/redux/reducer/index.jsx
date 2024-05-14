import { combineReducers } from "redux";
import productsReducer from "./produxtsreducer";

const rootReducer = combineReducers({
  products: productsReducer,
  // other reducers go here
});

export default rootReducer;
