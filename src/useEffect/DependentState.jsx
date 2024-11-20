import React, { useEffect, useState } from 'react'

const DependentState = () => {
    let [count,setCount]=useState(0);
    let run=()=>setCount(0)

    useEffect(()=>{
       let x= setTimeout(()=>{

            setCount(count+1)
        },1000);
        return ()=>clearTimeout(x);
    },[count])
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-[2rem]'>
    <p className='text-[3rem]'>{count}</p>
      <button className='bg-[blue] text-[white] font-bold py-[.5rem] px-[3rem] rounded-md ' onClick={run}>Click</button>
    </div>
  )
}

export default DependentState
