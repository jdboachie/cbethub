'use client'

import Search from '@/components/Search'
import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'
import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/skeletons/CourseCardSkeleton'

import { useState } from 'react'
import { fetchCourses } from '@/lib/_data'
import { RectangleGroupIcon, RectangleStackIcon, FunnelIcon } from '@heroicons/react/24/solid'

const Home = () => {

    const [view , setView] = useState<'grid' | 'list'>('list')
    const courseData = fetchCourses()

  return (
    <div
        className="flex flex-col items-center justify-center w-full"
    >
        <NavBar />
        <main
            className=' w-full pt-[8em] max-w-6xl space-y-5'
        >
            <PageTitle
                title='Courses'
            />
            <div
                className='my-0 mx-2 flex space-x-0.5'
            >
                <Search
                    className=''
                />
                {view === 'list' ? (
                    <RectangleGroupIcon
                        onClick={() => setView('grid')}
                        className='cursor-pointer w-9 h-9 border dark:border-[#333] rounded-lg p-2 bg-white dark:bg-[#111] dark:text-[#eee]' />
                ) : (
                    <RectangleStackIcon
                        onClick={() => setView('list')}
                        className='cursor-pointer w-9 h-9 border dark:border-[#333] rounded-lg p-2 bg-white dark:bg-[#111] dark:text-[#eee]' />
                )}
                <FunnelIcon className='w-9 h-9 border dark:border-[#333] rounded-lg p-2 bg-white dark:bg-[#111] dark:text-[#eee]' />
            </div>
            <div className={`w-full p-2 space-y-2 space-x-2 max-sm:space-x-0 grid grid-cols-4 max-sm:grid-cols-1 ${ view === 'grid' && 'max-sm:grid-cols-2 max-sm:space-x-1' } max-md:grid-cols-3 max-lg:grid-cols-4`}>
                {courseData.map((course) => (
                    <CourseCard
                        grid={view=='grid'}
                        key={course.courseCode}
                        courseCode={course.courseCode}
                        courseName={course.courseName}
                        lecturerName={course.lecturerName}
                        tags={course.tags}
                    />
                ))}
                <CourseCardSkeleton grid />
                <CourseCardSkeleton grid />
                <CourseCardSkeleton grid />
                <CourseCardSkeleton grid />
            </div>
        </main>


        {/* <div className='grid grid-cols-4'>
            <div className='p-1 cursor-pointer'>
                <BookmarkIcon className=' w-[7em] h-[7em] p-5 rounded-lg border text-blue-700 hover:bg-gradient-to-b hover:from-transparent hover:via-transparent hover:to-zinc-300'/>
                <p className='flex mt-1 px-2 text-sm'>
                    Saved Files
                </p>
                <p className='text-xs text-gray-500 px-2 flex'>14 files</p>
            </div>
            <div className='p-1 cursor-pointer'>
                <ClockIcon className=' w-[7em] h-[7em] p-5 rounded-lg border text-blue-700 hover:bg-gradient-to-b hover:from-transparent hover:via-transparent hover:to-zinc-300'/>
                <p className='flex mt-1 px-2 text-sm'>
                    Recent Files
                 </p>
                <p className='text-xs text-gray-500 px-2 flex'>23 files</p>
            </div>
        </div> */}
    </div>
  )
}

export default Home