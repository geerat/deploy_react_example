import { UPDATE_HEADER } from "../actionTypes";

export const updateHeader = (data) => ({
    type: UPDATE_HEADER,
    payload: {
        header: data
    }
})