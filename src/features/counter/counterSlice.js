import { createSlice } from "@reduxjs/toolkit";



//generally we create multi slices based on each feature.

const initialState = {
    count : 0
}

//Slice creation
//here we pass 3 parameter
// name of slice , initialState , reducer
//here increment,decrement --> action 
export const counterSlice = createSlice({
     name : "counter",
     initialState,
     reducers : {
        increment : (state)=>{
             state.count +=1;
        },
        decrement : (state)=>{
            state.count -=1;
        },
        reset : (state)=>{
             state.count = 0;
        },
        incrementByAmount : (state,action)=>{
             state.count += action.payload
        }
     }
})


export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;