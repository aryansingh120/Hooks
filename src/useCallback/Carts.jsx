import React, { useCallback } from 'react'
import { useReducer } from 'react';

const Carts = () => {
    let arr=[{name:"paras",price:200,q:0},{name:"mohit",price:300,q:0},{name:"chaman",price:400,q:0},{name:"ajay",price:500,q:0},{name:"ramo",price:600,q:0},{name:"maya",price:700,q:0},{name:"riya",price:800,q:0},{name:"aman",price:900,q:0},{name:"amit",price:1000,q:0},{name:"arnav",price:1100,q:0},];
    let reducer = useCallback((state,action)=>{
        let x = [...state];
        if (action.type === 0) 
            {
            x[0] += 1;
            x[10] += arr[0].price;
            return x;
        } 
        else if (action.type === 1)
             {
            x[1] += 1;
            x[10] += arr[1].price;
            return x;
        } 
        else if (action.type === 2) 
            {
            x[2] += 1;
            x[10] += arr[2].price;
            return x;
        }
         else if (action.type === 3) 
            {
            x[3] += 1;
            x[10] += arr[3].price;
            return x;
        }
         else if (action.type === 4)
             {
            x[4] += 1;
            x[10] += arr[4].price;
            return x;
        }
         else if (action.type === 5) 
            {
            x[5] += 1;
            x[10] += arr[5].price;
            return x;
        } else if (action.type === 6)
             {
            x[6] += 1;
            x[10] += arr[6].price;
            return x;
        } 
        else if (action.type === 7) 
            {
            x[7] += 1;
            x[10] += arr[7].price;
            return x;
        } 
        else if (action.type === 8)
             {
            x[8] += 1;
            x[10] += arr[8].price;
            return x;
        } 
        else if (action.type === 9) {
            x[9] += 1;
            x[10] += arr[9].price;
            return x;
        }
    },[arr]);

    let [state,dispatch]=useReducer(reducer,[0,0,0,0,0,0,0,0,0,0,0])
  return (
    <div className='bg-[orange]'>
    <p className='font-bold text-[3rem]'> Total price : {state[10]}</p>
<div  className=' min-h-[100vh]  flex gap-[1rem]'>
    {
       arr.map((item,index)=>{
        return (
            <div className='bg-[#67c467] rounded-md w-[33rem] h-[13rem] flex flex-col gap-[1rem] font-bold items-center capitalize' key={index}>
                <p> product : {index+1}</p>
                <p>name :{item.name}</p>
                <p>price:{item.price}</p>
                <p>Quantity : {state[index]}</p>
                <button className='bg-[blue] py-[.5rem] rounded-md px-[1rem]'onClick={()=>dispatch({type:index})} >Add to Cart</button>
            </div>
        )
       })
    }
   
</div>
</div>
  )
}

export default Carts
