import { useState } from 'react'
import { silkscreen } from '@/lib/fonts'

import {
    Bars2Icon,
    BellIcon,
    XMarkIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import Menu from '@/components/Menu'
import Search from '@/components/Search'
import Link from 'next/link'


const NavBar = () => {
    const [showMainMenu, setShowMainMenu] = useState(false)

    const handleMenuButtonClick = () => {
        setShowMainMenu(!showMainMenu)
    }

  return (
      <>
        <nav
            className='fixed top-0 z-50 flex flex-col justify-between w-full dark:border-b-[#333]'
        >
            <div className='flex w-full justify-between bg-white p-4 '>
                <div className='flex justify-between space-x-1 w-full'>
                    <div className='space-x-1 flex text-xs text-left text-gray-700'>
                        <div className="w-9 h-9 p-2 animate-shimmer border bg-gray-900 rounded-full">
                            <UserIcon className="text-gray-300" />
                        </div>
                        <p className='p-0.5 w-fit'>
                            Jude Boachie <br/>
                            judeboachiekwame@gmail.com
                        </p>
                    </div>
                    <div className='flex space-x-1'>
                        <BellIcon
                            className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer text-gray-700 dark:text-[#eee]'
                        />
                        {showMainMenu ? (
                                <XMarkIcon
                                    className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer text-gray-700 dark:text-[#eee]'
                                    onClick={handleMenuButtonClick}
                                />
                            ): (
                                <Bars2Icon
                                    className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer text-gray-700 dark:text-[#eee]'
                                    onClick={handleMenuButtonClick}
                                />
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full p-3 bg-white dark:bg-black border-b'>
                <ul className='flex space-x-1'>
                <Link
                        href={'/'}
                        className='p-3 rounded-lg border text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                        Files
                    </Link>
                    <Link
                        href={'/account'}
                        className='p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                        Account
                    </Link>
                    <Link
                        href={'/account/settings'}
                        className='p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                        Settings
                    </Link>
                    <Link
                        href={'/logout'}
                        className=' p-3 rounded-lg text-left text-xs hover:bg-gray-100 dark:hover:bg-[#111] w-full'>
                        Logout
                    </Link>
                </ul>
            </div>
        </nav>
        {showMainMenu && <Menu />}
    </>
  )
}

export default NavBar