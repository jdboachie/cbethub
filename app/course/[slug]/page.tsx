'use client'

import NavBar from "@/components/NavBar"
import PageTitle from "@/components/PageTitle"
import Tag from "@/components/Tag"
import File from '@/components/File'
import { fetchCourseById } from "@/lib/_data"
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid"


const page = (
    {params}: {params: {slug:string}}
) => {

    const courseData = fetchCourseById(params.slug)

  return (
    <div
        className="flex flex-col w-full justify-center items-center"
    >
        <NavBar isForCourseView />
        <main
            className='w-full pt-[8em] space-y-5 max-w-6xl'
        >
            <PageTitle
                title={courseData?.courseName}
            />
            <div className="p-3 m-2">
                <p className="font-mono text-xs dark:text-[#eee]">
                    {courseData?.courseCode}
                </p>
                <p className="mt-2 text-xs dark:text-[#eee]">
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
                className='h-fit p-3'
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
        </main>
    </div>
  )
}

export default page