import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { patternReducer } from "./patternReducer";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    pattern: patternReducer,
})

export default createRootReducer