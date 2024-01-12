'use client'

import PageTitle from '@/components/PageTitle'
import BlogPost from '@/components/BlogPost'
import Inquire from '@/components/Inquire'

const Page = () => {


  return (
    <>
        <PageTitle title="Blog"/>
        <Inquire />
        <div className={`w-full dark:text-[#eee] grid grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1`}>
          <BlogPost
            imgURL='/design.jpg'
            title='CBET December Challenge'
            id='0001'
          />
          <BlogPost
            imgURL='/fullstack.jpg'
            title='Full Stack Web Development Bootcamp'
            id='0002'
          />
          <BlogPost
            imgURL='/recruit.jpg'
            title='ACES Media Recruitment'
            id='0003'
          />
          <BlogPost
            imgURL='/blogpic.jpg'
            title='American Express is acquiring Kabbage for as much as $850M'
            id='0004'
          />
        </div>
    </>
  )
}

export default Page