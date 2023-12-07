import React from 'react'

const CourseCard = () => {
  return (
    <div
        className='border dark:border-[#333] rounded-lg w-[16em] h-[50vh] max-sm:w-[80vw] max-sm:h-[40vh] p-5 justify-end items-start flex flex-col space-y-2 m-1.5 cursor-pointer
                bg-gradient-to-b from-transparent via-transparent to-zinc-50 shadow-md transition duration-300 ease-in-out
                hover:from-transparent hover:via-transparent hover:to-zinc-300 hover:shadow-lg
                dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-zinc-900 dark:hover:shadow-lg
                dark:from-[#111] dark:via-[#111] dark:to-zinc-900 dark:shadow-lg'
    >
        <p
            className='text-left text-2xl max-sm:text-lg font-bold dark:text-[#eee]'
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