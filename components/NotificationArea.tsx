// import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PageTitle from './PageTitle'


const Menu = () => {
  return (
    <div className='z-10 fixed h-screen w-screen top-0 space-y-4 pt-[8em] bg-white dark:bg-black dark:border-t-[#333]'>
        <PageTitle title='Notifications' />
    </div>
  )
}

export default Menu