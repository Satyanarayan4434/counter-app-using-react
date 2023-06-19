import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-col items-center gap-8'>
        <h1 className='text-3xl font-mono text-white'>Increment & Decrement</h1>
        <div className='flex h-[3rem] w-[15rem] justify-center items-center gap-10 bg-white font-mono text-xl font-bold'>
            <p className='cursor-pointer border-r-2 border-black pr-6' onClick={props.numberIncreament}>+</p>
            <p>{props.numberChange}</p>
            <p className='cursor-pointer border-l-2 border-black pl-6' onClick={props.numberDecreament}>-</p>
        </div>
        <button onClick={props.reset} className='h-8 w-20 bg-white rounded-lg shadow-black shadow-sm hover:shadow-md hover:shadow-black'>Reset</button>
    </div>
  )
}

export default Card