'use client'

import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div
      className="flex flex-col pt-[8em] w-full"
    >
        <NavBar />
        <PageTitle title="Account"/>
    </div>
  )
}

export default page