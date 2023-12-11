'use client'

import Link from "next/link"
import Tag from "./Tag"

const CourseCard = (
    {
        courseName,
        courseCode,
        lecturerName,
        tags,
    } : {
        courseName?: string,
        courseCode?: string,
        lecturerName?: string,
        tags?: string[],
    }
) => {
  return (
    <div
        className='border rounded-lg dark:border-[#333] w-50 h-fit p-3 justify-end items-start flex flex-col space-y-2 m-1.5 cursor-pointer
                   hover:shadow-xl hover:scale-105 dark:bg-black bg-white
                   transition duration-300 ease-in-out'
        onClick={() => console.log('clicked')}
        // href={'/course/' + courseCode?.toLowerCase()}
    >
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">{courseCode}</p>
        <p
            className={`text-left max-sm:text-md font-[500] card-text-gradient`}
        >
            {courseName}
        </p>
        <p
            className='text-left pb-1 text-xs text-gray-500 dark:text-gray-400'
        >
            {lecturerName}
        </p>
        <div
            className="w-full pt-1 flex flex-wrap space-x-0.5 space-y-0.5 justify-start"
        >
            {tags?.map((tag, index) => (
                <Tag
                    key={index}
                    tag={tag}
                />
            ))}
        </div>
    </div>
  )
}

export default CourseCard