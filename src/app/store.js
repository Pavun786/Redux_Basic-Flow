import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"


//here store is configured.
//after reducers are imported from slices.and used inside of store 
export const store = configureStore({
    reducer: {
       counter : counterReducer
    }
})