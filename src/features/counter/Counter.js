import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./counterSlice";

const Counter = () =>{
   
    const count = useSelector((state)=>state.counter.count)
    
    //useDispatch----> used to dispatch the action
    //useSelector  --> used to only get the valuefrom the store

    const dispatch = useDispatch()

    const [incrementAmount,setIncrementAmount] = useState(0)

    //This is check the data type of useState.bcz,user maybe enter any values
    const addValue = Number(incrementAmount) || 0 ;

    const resetAll = ()=>{
        setIncrementAmount(0) //reset the useState value
        dispatch(reset())    // reset the value in store
    }


 
   
    return(
        <section>
           <p>{count}</p>
           <div>
              <button onClick={()=>dispatch(increment())}>+</button>
              <button onClick={()=>dispatch(decrement())}>-</button>
           </div>
           <input
            type="text"
            value={incrementAmount}
            onChange={(e)=> setIncrementAmount(e.target.value)}
           />
           <div>
            <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
           </div>
        </section>
    )
}

export default Counter;