import React from 'react'
import { useState } from 'react';

const IncrementDelay = () => {
    let [count,setCount]=useState(0);
    let [number,setNumber]=useState(0)
    let handleInput=(e)=>setNumber(e.target.value);

    let increase=()=>{
        setTimeout(()=>{
           setCount(count+Number(number))
            
        },2000)
    }

    let decrease=()=>{
        setTimeout(()=>{
           setCount(count-Number(number))
            
        },2000)
    }
    
      
  return (
    <div className='mt-[5rem] border-2 pl-[30%]'>
    <input type="number"  placeholder='input set Value' className='border ml-[5rem] mb-[2rem]' onChange={handleInput}/>
    <p className='pl-[7rem] uppercase mb-[3rem]'> Total ={count}</p>
    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[2rem] rounded-md mr-[3rem]' onClick={decrease}>DECREASE</button>

    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[2rem] rounded-md'onClick={increase}>INCREASE</button>

    
      
    </div>
      
    
  )
}

export default IncrementDelay
