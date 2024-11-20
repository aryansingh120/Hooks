import React from 'react'
import UseCounter from './UseCounter'

const CallCounter = () => {
    let {count,increment,decrement}=UseCounter()
  return (
    <div className='h-[100vh] bg-[orange] flex flex-col gap-[2rem] items-center'>
    <p>{count}</p>
    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-[white] rounded-md' onClick={increment}>Decrement</button>
    <button className='bg-[blue] px-[2rem] py-[.4rem] font-bold text-[white] rounded-md' onClick={decrement}>Decrement</button>


      
    </div>
  )
}

export default CallCounter
