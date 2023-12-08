'use client'

import Header from "@/components/Header"

const page = (
    {params}: {params: {slug:string}}
) => {
  return (
    <div
        className="flex flex-col items-center justify-center w-full flex-1 text-center space-y-5"
    >
        <Header />
        <main
            className='w-full p-5 pt-16 space-y-4 max-w-7xl'
        >
            <p
                className='w-full px-2 text-left text-lg font-semibold dark:text-[#eee]'
            >
                {params.slug.toUpperCase()}
            </p>
        </main>
    </div>
  )
}

export default page