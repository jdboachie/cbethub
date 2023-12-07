import React from 'react'

const Colors = () => {
  return (
    <div
        className='w-fit h-fit border grid grid-cols-4 gap-1 rounded-lg p-2'
    >
        <div className='border bg-white w-[30px] h-[30px] rounded-full'></div>
        <div className='border bg-slate-50 w-[30px] h-[30px] rounded-full'></div>
        <div className='border bg-zinc-300 w-[30px] h-[30px] rounded-full'></div>
        <div className='border bg-gray-500 w-[30px] h-[30px] rounded-full'></div>
        <div className='border bg-gray-700 w-[30px] h-[30px] rounded-full'></div>
        <div className='border bg-blue-700 w-[30px] h-[30px] rounded-full'></div>
    </div>
  )
}

export default Colors