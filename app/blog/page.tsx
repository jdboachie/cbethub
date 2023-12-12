'use client'



import NavBar from '@/components/NavBar'
import PageTitle from '@/components/PageTitle'
import {
  UserIcon,
  CameraIcon,
} from '@heroicons/react/24/solid'

const page = () => {
  return (
    <div
      className="flex flex-col pt-[7em] w-full space-y-5"
    >
      <NavBar />
      <PageTitle title="My Files"/>
    </div>
  )
}

export default page