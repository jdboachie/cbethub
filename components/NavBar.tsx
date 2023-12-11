import { useState } from 'react'

import {
    Bars2Icon,
    BellIcon,
    XMarkIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import Menu from '@/components/Menu'
import NotificationArea from '@/components/NotificationArea'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavBar = () => {
    const [showMainMenu, setShowMainMenu] = useState(false)
    const [showNotificationArea, setShowNotificationArea] = useState(false)

    const handleMenuButtonClick = () => {
        if (showNotificationArea) {
            setShowNotificationArea(false)
        }
        setShowMainMenu(!showMainMenu)
    }

    const handleBellButtonClick = () => {
        if (showMainMenu) {
            setShowMainMenu(false)
        }
        setShowNotificationArea(!showNotificationArea)
    }

    const currentPath = usePathname()
    console.log(currentPath)
  return (
      <>
        <nav
            className='fixed top-0 z-50 flex flex-col justify-between w-full dark:text-[#eee] bg-white dark:bg-[#111]'
        >
            <div className='flex w-full justify-between p-4 '>
                <div className='flex justify-between space-x-1 w-full'>
                    <div className='space-x-1 flex text-xs text-left text-gray-700'>
                        <div className="w-9 h-9 p-2 animate-pulse border dark:border-[#333] rounded-full">
                            <UserIcon className="text-gray-300 " />
                        </div>
                        <p className='p-0.5 w-fit dark:text-[#eee]'>
                            Jude Boachie <br/>
                            judeboachiekwame@gmail.com
                        </p>
                    </div>
                    <div className='flex space-x-1'>
                        {showNotificationArea ? (
                            <XMarkIcon
                                className='w-9 h-9 rounded-full border dark:border-red-900 bg-red-500 p-2 cursor-pointer text-gray-700 dark:text-red-900'
                                onClick={handleBellButtonClick}
                            />
                            ):(
                                <BellIcon
                                    className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer text-gray-700 dark:text-[#eee]'
                                    onClick={handleBellButtonClick}
                                />
                        )}
                        {showMainMenu ? (
                                <XMarkIcon
                                    className='w-9 h-9 rounded-full border dark:border-red-900 bg-red-500 p-2 cursor-pointer text-gray-700 dark:text-red-900'
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
            <div className='w-full p-3 border-b dark:border-b-[#333] text-center'>
                <ul className='flex space-x-1'>
                <Link
                        href={'/'}
                        className={`${currentPath === '/' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Courses
                    </Link>
                    <Link
                        href={'/account'}
                        className={`${currentPath === '/account' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Account
                    </Link>
                    <Link
                        href={'/settings'}
                        className={`${currentPath === '/settings' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Settings
                    </Link>
                    <Link
                        href={'/logout'}
                        className={`${currentPath === '/logout' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Logout
                    </Link>
                </ul>
            </div>
        </nav>
        {showMainMenu && <Menu />}
        {showNotificationArea && <NotificationArea />}
    </>
  )
}

export default NavBar