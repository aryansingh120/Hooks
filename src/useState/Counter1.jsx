import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0);
    let [number,setNumber]=useState(0)
    let handleInput=(e)=>setNumber(e.target.value);
      
  return (
    <div className='mt-[5rem] border-2 pl-[30%]'>
    <input type="number"  placeholder='input set Value' className='border ml-[5rem] mb-[2rem]' onChange={handleInput}/>
    <p className='pl-[7rem] uppercase mb-[3rem]'> Total ={count}</p>
    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[2rem] rounded-md mr-[3rem]' onClick={()=>setCount(count-Number(number))}>DECREASE</button>

    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[2rem] rounded-md'onClick={()=>setCount(count+Number(number))}>INCREASE</button>
    
      
    </div>
  )
}

export default Counter
