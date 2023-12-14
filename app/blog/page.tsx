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
import BlogPost from '@/components/BlogPost'

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
        <div className={`w-full dark:text-[#eee] grid grid-cols-2 p-2 ${ view === 'list' && 'max-sm:grid-cols-1'}`}>
          <BlogPost
            grid
            imgURL='/design.jpg'
            title='CBET December Challenge'
          />
          <BlogPost
            grid
            imgURL='/fullstack.jpg'
            title='Full Stack Web Development Bootcamp'
          />
          <BlogPost
            grid
            imgURL='/recruit.jpg'
            title='ACES Media Recruitment'
          />
          <BlogPost
            grid
            imgURL='/blogpic.jpg'
            title='American Express is acquiring Kabbage for as much as $850M'
          />
        </div>
      </main>

    </div>
  )
}

export default Page