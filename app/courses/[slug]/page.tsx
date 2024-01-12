'use client'

import NavBar from "@/components/NavBar"
import PageTitle from "@/components/PageTitle"
import Tag from "@/components/Tag"
import File from '@/components/File'
import { fetchCourseById } from "@/lib/_data"
import { DocumentIcon } from "@heroicons/react/24/outline"


const page = (
    {params}: {params: {slug:string}}
) => {

    const courseData = fetchCourseById(params.slug)

  return (
    <>
        <PageTitle
            title={courseData?.courseName}
        />
        <div className="px-1 space-y-4 text-sm dark:text-[#eee]">
            <p className="font-mono flex flex-col">
                <span className="text-gray-400 text-xs">Description</span>
                {courseData?.courseCode}
            </p>
            <p className="flex flex-col">
                <span className="text-gray-400 text-xs">Lecturer</span>
                {courseData?.lecturerName}
            </p>
            <div className="flex flex-col">
                <span className="text-gray-400 text-xs">Tags</span>
                <div className="flex space-x-1">
                    {courseData?.tags.map((tag) => (
                        <Tag
                            key={tag}
                            tag={tag}
                        />
                    ))}
                </div>
            </div>
            <p className="text-sm flex flex-col space-y-2 max-w-2xl">
                <span className="text-gray-400 text-xs">Description</span>
                {courseData?.description || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus ac tortor consectetur, a dignissim nisl pharetra.
            Proin eget augue vitae justo efficitur dictum eu ac ligula. Nulla facilisi. Vestibulum nec leo non justo fermentum
            tristique. Aliquam luctus ante in turpis vestibulum, a dapibus massa venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod metus ac tortor consectetur, a dignissim nisl pharetra.
            Proin eget augue vitae justo efficitur dictum eu ac ligula. Nulla facilisi. Vestibulum nec leo non justo fermentum
            tristique. Aliquam luctus ante in turpis vestibulum, a dapibus massa venenatis.`}
            </p>
        </div>
        <div
            className='h-fit px-1'
        >
            <p className="py-2 px-0.5 dark:text-[#eee]">
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