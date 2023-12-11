'use client'

import NavBar from "@/components/NavBar"
import PageTitle from "@/components/PageTitle"

const page = (
    {params}: {params: {slug:string}}
) => {
  return (
    <div
        className="flex flex-col items-center justify-center w-full flex-1 text-center space-y-5"
    >
        <NavBar />
        <PageTitle title="Account"/>
        <main
            className='w-full pt-16 max-sm:pt-[8em] space-y-4 max-w-7xl'
        >
            <PageTitle
                title={params.slug.toUpperCase()}
            />
        </main>
    </div>
  )
}

export default page