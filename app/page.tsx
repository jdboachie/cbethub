'use client'

import CourseCard from '@/components/CourseCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Search from '@/components/Search'

import {
    ClockIcon,
    BookmarkIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'



const Home = () => {

  return (
    <div
        className="flex flex-col items-center justify-center w-full flex-1 text-center space-y-5"
    >
        <Header />
        <main
            className='w-full p-5 pt-16 space-y-4 max-w-7xl'
        >
            <p
                className='w-full border px-2 text-left text-xl font-semibold dark:text-[#eee]'
            >
                Courses
            </p>
            <div className='w-full max-sm:justify-center max-lg:justify-center flex'>
                <div className="w-fit grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-3 max-lg:grid-cols-4">
                    <CourseCard
                        courseName='Introduction to Computer Science'
                        lecturerName='Dr. John Doe'
                        tags={['Computer Engineering', 'Computer Science']}
                    />
                    <CourseCard
                        courseName='Data Structures and Algorithms'
                        lecturerName='Prof. Jane Smith'
                        tags={['Computer Science', 'Programming']}
                    />
                    <CourseCard
                        courseName='Web Development Fundamentals'
                        lecturerName='Dr. Michael Johnson'
                        tags={['Web Development', 'Frontend', 'Backend', 'HTML', 'CSS', 'JavaScript']}
                    />
                    <CourseCard
                        courseName='Machine Learning Basics'
                        lecturerName='Dr. Emily Brown'
                        tags={['Artificial Intelligence', 'Data Science']}
                    />
                    <CourseCard
                        courseName='Database Management Systems'
                        lecturerName='Prof. David Lee'
                        tags={['Database Design', 'SQL']}
                    />
                    <CourseCard
                        courseName='Software Engineering Principles'
                        lecturerName='Dr. Samantha White'
                        tags={['Software Development', 'Project Management']}
                    />
                    <CourseCard
                        courseName='Cybersecurity Fundamentals'
                        lecturerName='Prof. Alex Rodriguez'
                        tags={['Network Security', 'Information Systems']}
/>

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
        <Footer />
    </div>
  )
}

export default Home