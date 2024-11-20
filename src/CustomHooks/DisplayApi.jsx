import React from 'react';
import FetchApi from './FetchApi';

const DisplayApi = () => {
//  let url="https://jsonplaceholder.typicode.com/posts";
let url="https://jsonplaceholder.typicode.com/posts?_limit=20";
    let {data,loding,error}=FetchApi(url);
   if(loding)
    return <p>Loding...</p>
   if(error)
    return <p>error find</p>


return (
    <div className='grid grid-cols-3 gap-[1rem]'>
      {
        data?.map((item)=>{
          return (
            <div className='border-2 border-black'>
              <p> Id: {item.id}</p>
              <p>userId : {item.userId}</p>
              <p>Title : {item.title}</p>
              <p> Body : {item.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayApi
