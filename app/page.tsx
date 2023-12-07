'use client'

import { useState } from 'react'

import CourseCard from '@/components/CourseCard'
import DropDownMenu from '@/components/DropDownMenu'
import Search from '@/components/Search'

import {
    Bars3Icon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

import {
    ClockIcon,
    BookmarkIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'



const Home = () => {
    // Use a grid background like partialprerendering.com

    const [showMainMenu, setShowMainMenu] = useState(false)

    const handleMenuButtonClick = () => {
        setShowMainMenu(!showMainMenu)
    }
    const handleStrayClick = () => {
        setShowMainMenu(false)
    }

  return (
    <div
        className="flex flex-col items-center justify-center w-full flex-1 text-center space-y-5"
        // onClick={handleStrayClick}
    >
        <nav
            className='fixed top-0 flex backdrop-blur justify-between w-full p-4 border-b dark:border-b-[#333]'
        >
            <h1 className="text-xl dark:text-[#eee]">
                CBET
            </h1>
            <div className='flex space-x-2'>
                <MagnifyingGlassIcon
                    className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                />
                <Bars3Icon
                    className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                    onClick={handleMenuButtonClick}
                />
            </div>
        </nav>
        {showMainMenu && <DropDownMenu />}

        <main
            className='w-full p-5 pt-16 space-y-4 max-w-7xl'
        >
            <p
                className='text-left text-2xl font-semibold dark:text-[#eee]'
            >
                Courses</p>
            <div className='w-full max-sm:justify-center max-lg:justify-center flex'>
                <div className="w-fit grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
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