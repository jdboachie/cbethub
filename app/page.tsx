import CourseCard from '@/components/CourseCard'
import Search from '@/components/Search'
import {
    ArchiveBoxIcon
} from '@heroicons/react/24/outline'

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
        <nav
            className='fixed top-0 flex backdrop-blur justify-between w-full p-3 border-b dark:border-b-[#333]'
        >
            <h1 className="text-lg font-semibold dark:text-[#eee]">
                CBET
            </h1>
        </nav>

        <main
            className='w-full p-5 pt-20'
        >
            <p>Courses</p>
            <div className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
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