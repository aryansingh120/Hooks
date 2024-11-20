import React, { useReducer } from 'react'

const Counter = () => {
  let reducer=(state,action)=>{
    if(action.type=="increment")
      return state+1;
    else if(action.type=="decrement")
      return state-1;
    else if(action.type=="reset")
      return 0;
    

  }
    let [count,dispatch]=useReducer(reducer,0);
  return (
    <div className='flex flex-col min-h-[100vh] justify-center items-center'>
    <p>{count}</p>
    <button onClick={()=>dispatch({type:"increment"})} className='bg-[blue] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]'>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})} className='bg-[blue] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]'>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})} className='bg-[blue] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]'>Reset</button>


    </div>
  )
}

export default Counter
