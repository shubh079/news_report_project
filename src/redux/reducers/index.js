import { combineReducers } from "redux";
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allPosts: productReducer,
});

export default reducers;