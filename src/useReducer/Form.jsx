import React, { useEffect, useReducer } from 'react'

const Form = () => {
    let run=(e)=>{
        if(input!=4)
            e.preventDefault();
       
     }

    
    let reducer=(state,action)=>{
       if(action.type=="first" && action.payload1!="")
        state=1;
    if(state==1 && action.type=="last" && action.payload2!="" )
        state=2;
    if(state==2 && action.type=="age" && action.payload3!="" )
        state=3;
    if(state==3 && action.type=="mail" && action.payload4!="" )
        state=4;           

   
    return state;
        

    }
let [input,dispatch]=useReducer(reducer,0);
  return (
    <div className=''>
    <form onSubmit={run} className='min-h-[100vh] bg-[orange] flex flex-col justify-center items-center gap-[1rem]'>
    <input type="text" placeholder='enter your first name'  className='w-[30rem] py-[.3rem] rounded-md outline-none   placeholder:capitalize placeholder:pl-[1rem]'  onChange={(e)=>dispatch({type:"first",payload1:e.target.value})}/>

    <input type="text" placeholder='enter your last name'  className='w-[30rem] py-[.3rem] rounded-md outline-none   placeholder:capitalize placeholder:pl-[1rem]' onChange={(e)=>dispatch({type:"last",payload2:e.target.value})}/>

    <input type="number" placeholder='enter your age'  className='w-[30rem] py-[.3rem] rounded-md outline-none   placeholder:capitalize placeholder:pl-[1rem]'  onChange={(e)=>dispatch({type:"age",payload3:e.target.value})}/>
    <input type="email" placeholder='enter your email'  className='w-[30rem] py-[.3rem] rounded-md outline-none   placeholder:capitalize placeholder:pl-[1rem]'  onChange={(e)=>dispatch({type:"mail",payload4:e.target.value})}/>
    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-white rounded-md'>Submit</button>
    </form>

    </div>
  )
}

export default Form
