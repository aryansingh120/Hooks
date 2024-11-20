import React, { useState } from 'react'

const ChangeColor = () => {
    let icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
  
    let [color,setColor]=useState("bg-[orange]")
  return (
    <div className={`${color} border-2 h-[100vh] flex justify-center items-center`}>
    <div className='group '>
    <p className='flex text-white font-bold'>
        <span className='mr-[.2rem] '>Choose Color</span>
        <span className='group-hover:rotate-180 transition-transform duration-800 '>{icon}</span>
    </p>
    <ul className='text-white uppercase hidden font-bold absolute group-hover:block text-center ml-[1rem] mt-[.1rem]'>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[red]")}>red</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[pink]")}>pink</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[green]")}>green</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[black]")}>black</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[yellow]")}>yellow</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[skyblue]")}>skyblue</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[dodgerblue]")}>dodgerblue</li>
        <li className='cursor-pointer px-[1rem]' onClick={()=>setColor("bg-[grey]")}>grey</li>

        
    </ul>
    </div>
      
    </div>
  )
}

export default ChangeColor
