'use client'

import PageTitle from '@/components/PageTitle'
import {
  CameraIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <PageTitle title="Account"/>
      <div
        className='flex flex-col space-y-2 items-center justify-center'
      >
        {/* This should be the user's image */}
        <div className="w-[10rem] relative">
          <div className="relative">
            <Image
              src={'/jdboachie.jpg'}
              alt='user image'
              width={1000}
              height={1000}
              objectFit='cover'
              className='rounded-full'
            />
            {/* <UserIcon className="z-0 p-5 text-gray-300 animate-pulse border dark:border-[#333] rounded-full bg-white dark:bg-[#111]" /> */}
            <CameraIcon className="z-10 w-9 h-9 p-2 absolute top-[8rem] right-[1rem] transform translate-x-1/3 -translate-y-1/3 rounded-full border dark:border-[#333] text-gray-300 bg-white dark:bg-[#111]" />
          </div>
        </div>
        {/** */}
      </div>

      {/* Menu */}
      <div
        className='h-fit py-3'
      >
        <ul className='flex flex-col space-y-3 border dark:border-[#333] rounded-lg p-2 text-xs dark:text-[#eee] bg-white dark:bg-black'>
          <li className='rounded-lg'>
            <p className='p-1'>Name</p>
            <input type="text" name="name" id="name" placeholder='Jude Boachie'
              className='p-2 dark:bg-black border dark:border-[#333] rounded-lg bg-inherit focus:border px-1 py-2 w-full text-gray-500'/>
          </li>

          <li className='rounded-lg'>
            <p className='p-1'>Email</p>
            <input type="email" name="email" id="email" placeholder='judeboachiekwame@gmail.com'
              className='p-2 w-full dark:bg-black rounded-lg bg-inherit text-gray-500 border dark:border-[#333] focus:border'/>
          </li>
          <li className='rounded-lg'>
            <p className='p-1'>Phone Number</p>
            <input type="tel" name="phone" id="phone" placeholder='+233500000000'
              className='p-2 w-full dark:bg-black rounded-lg bg-inherit text-gray-500 border dark:border-[#333] focus:border'/>
          </li>
          <li className='rounded-lg'>
            <p className='p-1'>Department</p>
            <select name="dept" id="dept"
              className='border p-2 bg-white dark:bg-black rounded-lg dark:border-[#333] w-full text-gray-500'
            >
                <option value="" disabled>Select department</option>
                <option value="aces">Computer Engineering</option>
                <option value="bmes">Biomedical Engineering</option>
                <option value="elesa">Electrical Engineering</option>
                <option value="telesa">Telecommunications Engineering</option>
            </select>
          </li>
          <li className='rounded-lg'>
            <p className='p-1'>Level</p>
            <select name="level" id="level" defaultValue={300}
              className='border p-2 bg-white dark:bg-black rounded-lg dark:border-[#333] w-full text-gray-500'
            >
                <option value="" disabled>Select level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  )
}

export default page