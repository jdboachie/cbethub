'use client'

import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'
import {
  UserIcon,
  CameraIcon,
} from '@heroicons/react/24/solid'

const page = () => {
  return (
    <div
      className="flex flex-col pt-[7em] w-full space-y-5"
    >
        <NavBar />
        <PageTitle title="Settings"/>
        <div
        className='flex flex-col space-y-2 p-4 justify-center items-center w-full max-w-6xl'
      >
        {/* This should be the user's image */}
        <div className="w-[10rem] relative">
          <div className="relative">
            <UserIcon className="z-0 p-5 text-gray-300 animate-pulse border dark:border-[#333] rounded-full bg-white dark:bg-[#111]" />
            <CameraIcon className="z-10 w-9 h-9 p-2 absolute top-[8rem] right-[1rem] transform translate-x-1/3 -translate-y-1/3 rounded-full border text-gray-300 bg-white dark:bg-[#111]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page