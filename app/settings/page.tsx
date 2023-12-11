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

      {/* Menu */}
      <div
        className='h-fit p-3'
      >
        <ul className='flex flex-col space-y-3 border rounded-lg p-2 text-xs bg-white dark:bg-[#111]'>
          <li className='rounded-lg'>
            <p className='p-1'>Name</p>
            <input type="text" name="name" id="name" placeholder='Jude Boachie'
              className='border-none focus:border px-1 py-2 w-full text-gray-500'/>
          </li>

          <li className='rounded-lg'>
            <p className='p-1'>Email</p>
            <input type="email" name="email" id="email" placeholder='judeboachiekwame@gmail.com'
              className='px-1 py-2 w-full text-gray-500 border-none focus:border'/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page