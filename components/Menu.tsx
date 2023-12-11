import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const Menu = () => {
  return (
    <div className='fixed h-screen w-screen top-12 p-4 bg-white dark:bg-black dark:border-t-[#333]'>
        <div
            className='w-full h-fit justify-start items-start flex flex-col space-y-2 cursor-pointer rounded-lg'
        >
            <div className='w-full p-3 space-y-3 text-gray-500 dark:text-[#eee] text-xs flex flex-col border-b dark:border-b-[#333] text-left
            '>
                <div className="animate-shimmer border bg-gray-900 rounded-full">
                    <UserIcon className="p-6 m-4 text-gray-300" />
                </div>
                <div className="">
                    <p className=''>Jude Boachie</p>
                    <p className=''>judeboachiekwame@gmail.com</p>
                    <p className=''>Computer Engineering</p>
                </div>
            </div>
            <ul className='w-full p-1 text-gray-600 dark:text-[#eee]'>
                <Link
                    href={'/'}
                    className='flex space-x-1 p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                    Files
                </Link>
                <Link
                    href={'/account'}
                    className='flex space-x-1 p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                    Account
                </Link>
                <Link
                    href={'/account/settings'}
                    className='flex space-x-1 p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                    Settings
                </Link>
                <Link
                    href={'/logout'}
                    className='flex space-x-1 p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                    Logout
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Menu