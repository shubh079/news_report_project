import { ActionTypes } from '../constants/action-types';


export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    };
};

export const setSearch = (search) => {
    return {
        type: ActionTypes.SET_SEARCH,
        payload: search,
    };
};



export const selectedPosts = (posts) => {
    return {
        type : ActionTypes.SELECTED_POSTS,
        payload: posts,
    };
};