'use client'


import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'
import PageTitle from '@/components/PageTitle'
import {
  RectangleGroupIcon,
  RectangleStackIcon,
  FunnelIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {

  const [view , setView] = useState<'grid' | 'list'>('list')

  return (
    <div
      className="flex flex-col w-full items-center justify-center space-y-5"
    >
      <NavBar />
      <main
            className=' w-full pt-[7em] space-y-2 max-w-6xl'
      >
        <PageTitle title="Blog"/>
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
        <div className={`w-full dark:text-[#eee] p-2 space-y-2 ${ view === 'grid' && 'max-sm:grid-cols-2 max-sm:space-x-1' } max-md:grid-cols-3 max-lg:grid-cols-4`}>
            <div
              className={`border rounded-lg dark:border-[#333] p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer
              hover:shadow-xl active:bg-transparent dark:bg-[#111] bg-white
              transition duration-250 ease-in-out`}
            >
              <Image
                alt='blog post title'
                src={'/blogpic.jpg'}
                width={5000}
                height={5000}
                className='object-cover w-full rounded-lg'
              />
              <div
                  className='space-x-1 my-2 p-1 flex text-left text-gray-700 dark:text-[#eee] rounded-lg hover:bg-gray-100 dark:hover:bg-blue-900'
              >
                <div className="w-9 h-9 p-2 animate-pulse border dark:border-[#333] rounded-full">
                    <UserIcon className="" />
                </div>
                <p
                    className='p-0.5 w-fit text-xs'
                    >
                    Jude Boachie < br />
                    13th December, 2023
                </p>
              </div>
              <p className="font-semi text-xl pt-4">
                CBET DECEMBER CHALLENGE - CBETHUB WEBSITE UI/UX DESIGN
              </p>
            </div>
        </div>
      </main>

    </div>
  )
}

export default Page