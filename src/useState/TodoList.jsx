import React, { useState } from 'react'

const ToDoList = () => {
    let [input,setInput]=useState("");
    let [count,setCount]=useState([]);
    let [btn,setBtn]=useState([])
    let [k,setK]=useState(0)
    
    let add=()=>{
      if(input.trim()!=="")
      {
        
      setCount([...count,input]);
      setBtn([...btn,"Delete"]);
      }
      setInput("");
    }

    let remove =(hii)=>{
      setK(k=count.filter((item,index)=>(index!==hii)))
      setCount(k);
      
      
    }
  return (
    <div className='bg-[orange] min-h-[100vh]  pt-[10rem]'>
<div className='w-[100%] border-2 pl-[20rem] '>

<input type="text" placeholder='enter your task' value={input} className='rounded-md py-[.4rem] w-[40%] h-[2.5rem]' onChange={(e)=>setInput(e.target.value)}/>

<button className='bg-[blue] px-[3rem] h-[2.5rem] text-[white] font-bold rounded-md ml-[1rem]' onClick={add}>Add</button>
</div>
  
  <div className='pl-[22rem] pt-[1rem]'>
  {
    count.map((item,index)=>{
      return (
        <div className='flex items-center mb-[1rem]'>
        <div className='w-[70%]'>
        <p className='text-[1.6rem]'>{item}</p>
        </div>
        <div className='w-[30%]'>
        <button className='bg-[red] text-white h-[2rem] rounded-lg px-[3rem]' onClick={()=>remove(index)}>{btn[index]}</button>
        </div>
        </div>
      )
    })
  }
    
  </div>
      
    </div>
  )
}

export default ToDoList
