'use client'

import Search from '@/components/Search'
import PageTitle from '@/components/PageTitle'
import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/skeletons/CourseCardSkeleton'

import { useState } from 'react'
import { fetchCourses } from '@/lib/_data'
import { RectangleGroupIcon, RectangleStackIcon, FunnelIcon } from '@heroicons/react/24/solid'
import Inquire from '@/components/Inquire'

const Home = () => {

    const [view , setView] = useState<'grid' | 'list'>('list')
    const courseData = fetchCourses()

  return (
    <>
        <PageTitle
            title='Courses'
        />
        <Inquire />
        <div className={`w-full space-y-3 mt-3`}>
            {courseData.map((course) => (
                <CourseCard
                    grid={view=='grid'}
                    key={course.courseCode}
                    courseCode={course.courseCode}
                    courseName={course.courseName}
                    lecturerName={course.lecturerName}
                    tags={course.tags}
                />
            ))}
            <CourseCardSkeleton grid />
            <CourseCardSkeleton grid />
            <CourseCardSkeleton grid />
            <CourseCardSkeleton grid />
        </div>
    </>
  )
}

export default Home