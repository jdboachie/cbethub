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
        className={`border w-fit max-sm:w-full rounded-lg dark:border-[#333] h-fit p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer
                   hover:shadow-xl active:bg-transparent dark:bg-[#111] bg-white
                   transition duration-250 ease-in-out
                   ${grid && 'max-sm:w-full h-fit'}
                   ${clicked ? 'shadow-xl scale-105' : ''}`}
        onMouseOver={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        href={'/course/' + courseCode?.toLowerCase()}
    >
        <p className="font-mono text-xs text-gray-500 dark:text-gray-300">{courseCode}</p>
        <p
            className={`text-left max-sm:text-sm font-[500] card-text-gradient`}
        >
            {courseName}
        </p>
        <p
            className='text-left pb-1 text-xs text-gray-500 dark:text-gray-300'
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
    </Link>
  )
}

export default CourseCard