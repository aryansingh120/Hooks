import React, { useReducer, useState } from 'react'

const Todo = () => {
    let [input,setInput]=useState("")
    

    let reducer=(state,action)=>{
        if(action.type=="add")
        {
            if(input!=="")
                {
                    let x= [...state,input];   //old state ko copy krke usme input add krega or current state ko return kr dega 
                    setInput("");
                    return x;
                    
                }
        }
        else if(action.type=="remove")
           {
         return state.filter((_,number)=>number!==action.index)
            
           }
        
    }

        let [count,dispatch]=useReducer(reducer,[]);

       
        

    
  return (
    <div className='min-h-[100vh] bg-[orange] items-center flex flex-col pt-[15rem]'>
    <div>
    <input type="text" className='h-[2.5rem] w-[40rem] rounded-md'value={input} onChange={(e)=>setInput(e.target.value)} />
    <button className='bg-[blue] px-[2rem] py-[.5rem] rounded-md ml-[1rem]' onClick={()=>dispatch({type:"add"})}>Add Task</button>
    </div>
    {
         count.map((item,index)=>{
            return(
                <div className='flex mt-[1rem] font-bold' key={index}>                
                <p  className='text-[1.3rem]'>{item}</p>
                <button className='bg-[blue] px-[2rem] py-[.3rem] text-white rounded-md ml-[1rem]'  onClick={()=>dispatch({type:"remove",index:index})}>Remove</button>
                </div>

            )
         })
    }
      
    </div>
  )
}

export default Todo
