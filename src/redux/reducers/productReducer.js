import { ActionTypes } from "../constants/action-types";
const initialState = {
  posts: [{}],
  search: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };

    case ActionTypes.SET_SEARCH:
      return { ...state, search: payload };

    default:
      return state;
  }
};
