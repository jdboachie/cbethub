'use client'

import NavBar from "@/components/NavBar"
import PageTitle from "@/components/PageTitle"
import Tag from "@/components/Tag"
import File from '@/components/File'
import { fetchCourseById } from "@/lib/_data"
import { DocumentIcon } from "@heroicons/react/24/solid"


const page = (
    {params}: {params: {slug:string}}
) => {

    const courseData = fetchCourseById(params.slug)

  return (
    <>
        <PageTitle
            title={courseData?.courseName}
        />
        <div className="px-3">
            <p className="font-mono text-sm dark:text-[#eee]">
                {courseData?.courseCode}
            </p>
            <p className="mt-2 text-sm dark:text-[#eee]">
                {courseData?.lecturerName}
            </p>
            <div className="flex mt-4 space-x-0.5">
                {courseData?.tags.map((tag) => (
                    <Tag
                        key={tag}
                        tag={tag}
                    />
                ))}
            </div>
            <p>
                {courseData?.description}
            </p>
        </div>
        <div
            className='h-fit px-1'
        >
            <p className="py-2 px-0.5 text-sm dark:text-[#eee]">
                Files
            </p>
            <ul className='flex flex-col space-y-1 rounded-lg text-xs dark:text-[#eee]'>
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
            </ul>
        </div>
    </>
  )
}

export default page