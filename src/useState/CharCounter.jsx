import React, { useState } from 'react'

const CharCounter = () => {
    let [count,setCount]=useState(0);
    let [flag,setflag]=useState("");
    let run=()=>{
        setCount((flag.trim()).length)
        
    }
  return (
    <div className='h-[100vh] bg-[orange] flex flex-col justify-center items-center gap-[2rem]'>
    <textarea rows={5} cols={40} maxLength={200} onChange={(e)=>setflag(e.target.value)}></textarea>
    <p>total character = {count}</p>
    <p>input char limit remaining = {200-count}</p>
    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[3rem] rounded-md' onClick={run}>Count</button>
      
    </div>
  )
}

export default CharCounter
