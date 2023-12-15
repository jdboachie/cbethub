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
        className={`border rounded-lg dark:border-[#333] h-fit p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer
                   bg-gradient-to-t from-white dark:from-[#111] via-white dark:via-[#111] to-zinc-100 dark:to-black bg-fixed bg-no-repeat bg-cover
                   transition duration-250 ease-in-out
                   ${grid ? 'max-sm:w-fit': 'max-sm:w-full'}
                   ${clicked ? 'scale-110 shadow-xl max-sm:scale-100 max-sm:shadow-none' : ''}`}
        onMouseOver={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        href={'/course/' + courseCode?.toLowerCase()}
    >
        <p className="font-mono text-xs text-gray-500 dark:text-gray-300">{courseCode}</p>
        <p
            className='text-left text-xs text-gray-500 dark:text-gray-300'
        >
            {lecturerName}
        </p>
        <p
            className={`text-left pb-1 max-sm:text-sm font-[500] card-text-gradient`}
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