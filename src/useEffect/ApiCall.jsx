import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    let [products,setProducts]=useState([])

   let receive=async()=>{
  try {
    let fetch=await axios.get("https://fakestoreapi.com/products");
    console.log(fetch.data);
    setProducts(fetch.data)
  } catch (error) {
    console.log("error=",error);
    
    
  }
    
   }
   useEffect(()=>{
    receive();
   },[])
  return (
    <div className='grid grid-cols-3 gap-[2rem]'>
    {
products.map((item)=>{
    return (
        <div className='w-[25rem] border-4 border-black flex flex-col items-center'>
        <img src={item.image} alt="" className='h-[10rem] w-[10rem]'/>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>



        </div>
    )
})
    }
      
    </div>
  )
}

export default ApiCall
