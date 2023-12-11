// import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PageTitle from './PageTitle'


const Menu = () => {
  return (
    <div className='fixed h-screen w-screen top-0 p-4 bg-white dark:bg-black dark:border-t-[#333]'>
        <div>
            {/* The Actual Menu here */}
            <PageTitle title='Menu' />
        </div>
    </div>
  )
}

export default Menu