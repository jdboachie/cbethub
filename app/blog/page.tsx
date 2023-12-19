'use client'


import { useState } from 'react'
import PageTitle from '@/components/PageTitle'
import BlogPost from '@/components/BlogPost'
import Inquire from '@/components/Inquire'

const Page = () => {

  const [view , setView] = useState<'grid' | 'list'>('list')

  return (
    <>
        <PageTitle title="Blog"/>
        <Inquire />
        <div className={`w-full dark:text-[#eee] grid grid-cols-1 ${ view === 'grid' && 'max-sm:grid-cols-2'}`}>
          <BlogPost
            grid={view === 'grid'}
            imgURL='/design.jpg'
            title='CBET December Challenge'
            id='000001'
          />
          <BlogPost
            grid={view === 'grid'}
            imgURL='/fullstack.jpg'
            title='Full Stack Web Development Bootcamp'
            id='000002'
          />
          <BlogPost
            grid={view === 'grid'}
            imgURL='/recruit.jpg'
            title='ACES Media Recruitment'
            id='000003'
          />
          <BlogPost
            grid={view === 'grid'}
            imgURL='/blogpic.jpg'
            title='American Express is acquiring Kabbage for as much as $850M'
            id='000004'
          />
        </div>
    </>
  )
}

export default Page