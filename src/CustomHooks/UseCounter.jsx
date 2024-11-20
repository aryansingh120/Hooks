
import React, { useState } from 'react'

const UseCounter = () => {
    let [count,setCount]=useState(0);
   let increment=()=>setCount(count+1);
   let decrement=()=>setCount(count-1);

  return {count,increment,decrement}
  
}

export default UseCounter
