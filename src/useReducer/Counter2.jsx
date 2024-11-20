import React, { useReducer, useState } from 'react'

const Counter2 = () => {
  let [flag,setFlag]=useState(0)
    let reducer=(state,action)=>{
        if(action.type=="increment")
       {
            return state+Number(flag);
       }
        else if(action.type=="decrement")
            return state-Number(flag);
    }
    let [count,dispatch]=useReducer(reducer,0)
  return (
    <div className='flex flex-col min-h-[100vh] justify-center items-center bg-[orange] '>
    <input type="text" className='rounded-md py-[.4rem] outline-none' onChange={(e)=>setFlag(e.target.value)}/>

    <p className='mt-[.5rem]'>sum= {count}</p>

    <button  className='bg-[blue] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]' onClick={()=>dispatch({type:"increment"})}>Increment</button>

        <button  className='bg-[blue] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]'onClick={()=>dispatch({type:"decrement"})}>Decrement</button>


    </div>
  )
}

export default Counter2
