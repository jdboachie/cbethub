'use client'

import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <div
      className="flex flex-col pt-[8em] w-full space-y-5"
    >
        <NavBar />
        <PageTitle title="Settings"/>
    </div>
  )
}

export default page