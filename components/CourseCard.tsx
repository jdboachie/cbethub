'use client'

import { useState } from "react"

import Link from "next/link"
import Tag from "./Tag"

const CourseCard = (
    {
        grid,
        courseName,
        courseCode,
        lecturerName,
        tags,
    } : {
        grid?: boolean,
        courseName?: string,
        courseCode?: string,
        lecturerName?: string,
        tags?: string[],
    }
) => {
    const [clicked, setClicked] = useState(false)
  return (
    <Link
        className={`border rounded-2xl dark:border-[#333] h-fit p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer
                   transition duration-250 ease-in-out max-sm:m-0 m-1 backdrop-blur-xl
                   `}
        onMouseOver={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        href={'/courses/' + courseCode?.toLowerCase()}
    >
        <p className="font-mono max-sm:text-xs text-gray-500 dark:text-gray-500">{courseCode}</p>
        <p
            className='text-left max-sm:text-xs text-gray-500 dark:text-gray-500'
        >
            {lecturerName}
        </p>
        <p
            className={`text-left pb-1 text-lg max-sm:text-sm font-[500] text-gray-700 dark:text-gray-200`}
        >
            {courseName}
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
    </Link>
  )
}

export default CourseCard