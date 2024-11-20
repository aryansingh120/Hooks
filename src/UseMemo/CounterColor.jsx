import React, { useMemo, useRef, useState } from 'react'

const CounterColor = () => {
    let [count,setCount]=useState(0);
    let [num,setNum]=useState(0)
    let colorArr=["white","red","pink","orange","yellow","skyblue","blue","dodgerblue","green"];
    let divRef=useRef(null)
    let run=()=>{
      let x=Math.random()*(8-0)+0;
      x=Math.floor(x);
      console.log(x);
      
     divRef.current.style.backgroundColor=colorArr[x];
  }
    let paras=useMemo(()=>{
      return ()=>setCount(count+1);
    },[count]);

    let aa=useMemo(()=>{
      return ()=>setCount(count-1);
    },[count])
    
  return (
    <div className={`h-[100vh] flex flex-col gap-[2rem] items-center`} ref={divRef}>
    <p>{count}</p>
    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-[white] rounded-md' onClick={paras}>Increment</button>
    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-[white] rounded-md' onClick={aa}>Decrement</button>

    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-[white] rounded-md' onClick={run}>Color Generator</button>


      
    </div>
  )
}

export default CounterColor



