import { createStore } from "@reduxjs/toolkit"
import createRootReducer from "./reducers/createRootReducer"



export default function configureStore(history, state) {

    const store = createStore(
        createRootReducer(history), 
    )

    return store
}