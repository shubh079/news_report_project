import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  results: productReducer,
});

export default reducers;
