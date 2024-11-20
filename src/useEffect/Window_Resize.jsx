import React, { useEffect, useState } from 'react'

const Window_Resize = () => {
    let [count,setCount]=useState(window.innerHeight);
    let [flag,setFlag]=useState(window.innerWidth)
   
   useEffect(()=>{
   window.addEventListener("resize",()=>{
    setCount(window.innerHeight);
    setFlag(window.innerWidth);

    return window.removeEventListener("resize",()=>{
      setCount(window.innerHeight);
    setFlag(window.innerWidth);
    })
   }
  )
   
   },[count])
    
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
    <p className='text-[5rem]'> screen hight={count}</p>
    <p className='text-[5rem]'>screen width={flag}</p>
    </div>
  )
}

export default Window_Resize
