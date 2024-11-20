import React, { useEffect, useState } from 'react'
const ScrollPosition=()=>{
    let [count,setCount]=useState(0);
    let [flag,setFlag]=useState(0);
    
    
    useEffect(()=>{


        window.addEventListener("scroll",()=>{
            setCount(window.scrollX);
            setFlag(window.scrollY);
        })

        return ()=>window.removeEventListener("scroll",()=>{
            setCount(window.scrollX);
            setFlag(window.scrollY);
        })
    },[count])
  
    return (
        <div className='h-[200rem] w-[200rem]'>
        <div className='border-2 bg-[yellow] text-[5rem] pl-[40%] fixed w-[100%]' >
                <p className=''> scrollX={count}</p>
                <p className=''> scrollY={flag}</p>

        </div>
        </div>
    )
}
export default ScrollPosition

