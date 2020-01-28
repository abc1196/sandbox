
import * as types from "./types";

export const userReducer = (state, action) => {
    switch(action.type) {
        case types.ADD_TOKEN:
            return { value: action.value };
        case types.REMOVE_TOKEN:
            return { value: '' };
        default:
            return state;
    }
}