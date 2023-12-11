'use client'

import NavBar from "@/components/NavBar"
import PageTitle from "@/components/PageTitle"
import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton"

const page = (
    {params}: {params: {slug:string}}
) => {
  return (
    <div
        className="flex flex-col w-full"
    >
        <NavBar />
        <main
            className='w-full pt-[8em] space-y-4 max-w-6xl'
        >
            <PageTitle
                title={params.slug.toUpperCase()}
            />
            {/* <CourseCardSkeleton /> */}
        </main>
    </div>
  )
}

export default page