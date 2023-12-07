import React from 'react'

const CourseCard = () => {
  return (
    <div
        className='border rounded-lg w-[16em] h-[50vh] p-5 justify-end items-start flex flex-col space-y-2 cursor-pointer
                bg-gradient-to-b from-transparent via-transparent to-slate-50 shadow-md transition duration-300 ease-in-out
                hover:from-transparent hover:via-transparent hover:to-zinc-300 hover:shadow-lg'
    >
        <p
            className='text-left text-2xl font-bold'
        >
            APPLIED ELECTRICITY
        </p>
        <p
            className='text-left text-xs'
        >
            Prof. Dominic K. Quoffie
        </p>
        {/* <div
            className='flex space-x-0.5 rounded-md border p-1 text-gray-800 bg-gradient-to-b from-transparent via-transparent to-zinc-300'
        >
            <ArrowDownTrayIcon
                className='w-5 h-5'
            />
            <p
                className='text-xs p-0.5'
            >
                53
            </p>
        </div> */}
        <div
            className='text-xs text-left text-gray-500'
        >
            15 files
        </div>
    </div>
  )
}

export default CourseCard