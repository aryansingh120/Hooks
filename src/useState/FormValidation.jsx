import React, { useState } from 'react'

const FormValidation = () => {
let [first,setFirst]=useState("")
let [last,setLast]=useState("");

    let handle=(e)=>{
      if(first=="" || last=="")
        e.preventDefault();

    }
  return (
    <div className='border-2 border-black mt-[10rem] bg-[red] '>
<form className='flex flex-col items-center gap-[2rem] ' onSubmit={handle}>
       <input type="text" placeholder='enter your first name' className='w-[30%] rounded-md py-[.5rem] placeholder:uppercase pl-[1rem] font-bold' onChange={(e)=>setFirst(e.target.value)} />

    <input type="text" placeholder='enter your last name' className='w-[30%] rounded-md py-[.5rem] placeholder:uppercase pl-[1rem] font-bold' onChange={(e)=>setLast(e.target.value)} />

    <button className='bg-[blue] text-[white] font-bold rounded-md py-[.5rem] px-[2rem]'>Submit</button>

</form>
      
    </div>
  )
}

export default FormValidation
