import Link from "next/link"
import Tag from "./Tag"
import { oswald } from "@/lib/fonts"



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
    <Link
        className='border rounded-lg dark:border-[#333] w-50 h-fit p-5 justify-end items-start flex flex-col space-y-2 m-1.5 cursor-pointer
                   bg-gradient-to-b from-white via-white to-gray-100 dark:from-purple-700 dark:via-purple-500 dark:to-blue-700
                   hover:shadow-xl hover:scale-105
                   transition duration-300 ease-in-out'
        href={'/course/' + courseCode?.toLowerCase()}
    >
        <p className="font-mono text-xs">{courseCode}</p>
        <p
            className='text-left max-sm:text-sm font-semibold dark:text-[#eee] text-lg ${silkscreen.className} bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'
        >
            {courseName}
        </p>
        <p
            className='text-left text-xs'
        >
            {lecturerName}
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
        {/* <div
            className='text-xs text-left text-gray-500'
        >
            15 files
        </div> */}

        <div
            className="w-full flex flex-wrap space-x-0.5 space-y-0.5 justify-start"
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