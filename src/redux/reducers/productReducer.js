import { ActionTypes } from "../constants/action-types";
const initialState = {
    posts:[{

    }]
}

export const productReducer = (state = initialState,{type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POSTS:
            return {...state, posts:payload};
              default :
            return state;
    }
}