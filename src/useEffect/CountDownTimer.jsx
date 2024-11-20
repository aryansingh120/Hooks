import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
  const w=60
  let [count,setCount]=useState(w);
  useEffect(()=>{

    
    if(count!==0)
    {
     const x= setTimeout(() => {
        console.log(count);
        setCount(()=>count-1)


        
      },1000);
      return ()=>clearTimeout(x);
      
    }
    
  },[count])

  useEffect(()=>{
    window.addEventListener("visibilitychange",()=>{
      if(document.hidden)
        setCount(w);
    })

    return ()=>{
      window.removeEventListener("visibilitychange",()=>{
        if(document.hidden)
          setCount(w);
      })
    }
  },[])

 
  return (
   <div className='flex justify-center items-center h-[100vh] text-[3rem]'>

    <p>{count}</p>
   </div>
  )
}

export default CountDownTimer
