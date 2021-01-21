import { UPDATE_HEADER } from "../actionTypes";

const defaultState = {
    header: 'sdfsdf',
}


export function patternReducer(state = defaultState, action) {
    switch(action.type) {
        case UPDATE_HEADER:
            {
                return {
                    ...state,
                    header: action.payload.header
                }
            }
        default:
            {
                return state;
            }
    }
}