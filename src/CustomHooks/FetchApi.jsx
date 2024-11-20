import React, { useEffect, useState } from 'react'

function FetchApi(url){
    let [data,setData]=useState(null);
    let [loding,setLoding]=useState(true);
    let [error,setError]=useState(null);

    useEffect(()=>{

        let receive=async()=>{
            
            try {
                let paras=await fetch(url);
                let result=await paras.json();
                console.log(result);
                setData(result);
            } 
            catch (error) {  
                setError(error)
                
            }
            finally{
                setLoding(false);
            }
        }
receive();
    },[url]);

   return {data,loding,error}
  
}

export default FetchApi
