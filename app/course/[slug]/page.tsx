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
                    <li className='p-3 flex text-xs font-mono justify-between rounded-lg border dark:border-[#333] bg-gradient-to-b backdrop-brightness-0 from-blue-50 dark:from-[#020229] via-teal-50 dark:via-[#111] to-white dark:to-[#000] bg-fixed bg-no-repeat bg-cover hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer'>
                        <div className="flex">
                            <DocumentIcon className='w-4 h-4 mr-1 inline-block dark:text-white'/>
                            <p className="text-xs">
                                course.zip
                            </p>
                        </div>
                        <p className="">
                            12/12/2023
                        </p>
                        <p className="">
                            2.3Mb
                        </p>
                    </li>
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