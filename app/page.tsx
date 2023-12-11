'use client'

import CourseCardSkeleton from '@/components/skeletons/CourseCardSkeleton'
import CourseCard from '@/components/CourseCard'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'

import {
    ClockIcon,
    BookmarkIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'



const Home = () => {

  return (
    <div
        className="flex flex-col items-center justify-center w-full flex-1 text-center space-y-5
                   "
    >
        <NavBar />
        <main
            className=' w-full pt-[7em] space-y-4 max-w-6xl'
        >
            <PageTitle
                title='All Courses'
            />
            <div className='w-full max-sm:justify-center max-lg:justify-center flex p-2'>
                <div className="w-fit grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-3 max-lg:grid-cols-4">
                    <CourseCard
                        courseCode='CENG291'
                        courseName='Engineering in Society'
                        lecturerName='Dr. John Doe'
                        tags={['Computer Engineering', 'Computer Science']}
                    />
                    <CourseCard
                        courseCode='COE291'
                        courseName='Computer Engineering Lab I'
                        lecturerName='Prof. Jane Smith'
                        tags={['Computer Science', 'Programming']}
                    />
                    <CourseCard
                        courseCode='COE281'
                        courseName='Programming and Problem Solving'
                        lecturerName='Dr. Michael Johnson'
                        tags={['Web Development', 'C Programming', 'Backend', 'Algorithms', 'Searching', 'Sorting']}
                    />
                    <CourseCard
                        courseCode='COE253'
                        courseName='Discrete Structures'
                        lecturerName='Dr. Emily Brown'
                        tags={['Artificial Intelligence', 'Data Science']}
                    />
                    <CourseCard
                        courseCode='MATH251'
                        courseName='Differential Equations'
                        lecturerName='Prof. David Lee'
                        tags={['Database Design', 'SQL']}
                    />
                    <CourseCard
                        courseCode='COE261'
                        courseName='Communication Systems'
                        lecturerName='Dr. Samantha White'
                        tags={['Software Development', 'Project Management']}
                    />
                    <CourseCard
                        courseCode='COE271'
                        courseName='Semiconductor Devices'
                        lecturerName='Prof. Alex Rodriguez'
                        tags={['Network Security', 'Information Systems']}
                    />
                    <CourseCard
                        courseCode='ECON151'
                        courseName='Elements of Economics I'
                        lecturerName='Prof. Alex Rodriguez'
                        tags={['Network Security', 'Information Systems']}
                    />
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                    <CourseCardSkeleton />
                </div>

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