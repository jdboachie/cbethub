// import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PageTitle from './PageTitle'


const Menu = () => {
  return (
    <div className='z-20 fixed h-screen w-screen backdrop-blur-lg top-0 p-5'
    >
      <div className="bg-white dark:bg-[#222] absolute top-[10em] rounded-lg w-[90%]">
        <p className='py-5 text-center dark:text-[#eee] w-full border-b dark:border-b-[#333]'>
          Notifications
        </p>
        <div className='py-5 px-2 space-y-1'>
          <div className="text-xs dark:text-[#eee] p-3 bg-gray-100 dark:bg-[#111] font-mono rounded-lg">
            😪 This bit is in development!
          </div>
          <div className="text-xs dark:text-[#eee] p-3 bg-gray-100 dark:bg-[#111] font-mono rounded-lg">
            😪 This bit is in development!
          </div>
          <div className="text-xs dark:text-[#eee] p-3 bg-gray-100 dark:bg-[#111] font-mono rounded-lg">
            😪 This bit is in development!
          </div>
          <div className="text-xs dark:text-[#eee] p-3 bg-gray-100 dark:bg-[#111] font-mono rounded-lg">
            😪 This bit is in development!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu