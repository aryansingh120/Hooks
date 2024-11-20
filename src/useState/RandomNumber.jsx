import React from 'react'
import {useState} from 'react'

const RandomNumber = () => {
    let [number,setNumber]=useState("")

    let generate=()=>{
        let x=Math.random()*(50-1+1)+1;
        x=Math.floor(x);
        setNumber(Number(x))
        
    }
  return (
    <div className='mt-[5rem] border-2 pl-[30%]'>
    <input type="number" value={number}  placeholder='generate number' className='border ml-[5rem] mb-[2rem] read-only: placeholder:uppercase'/>
    <button className='bg-[blue] text-white font-bold py-[.5rem] px-[2rem] rounded-md ml-[1rem] uppercase ' onClick={generate}>generate</button>

    
      
    </div>
  )
}

export default RandomNumber
