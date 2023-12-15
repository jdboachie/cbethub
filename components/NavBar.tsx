import { useState } from 'react'
import { silkscreen } from '@/lib/fonts'

import {
    Bars2Icon,
    BellIcon,
    XMarkIcon,
    UserIcon,
    SunIcon,
    MoonIcon,
    MagnifyingGlassIcon,
    ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'
import Menu from '@/components/Menu'
import NotificationArea from '@/components/NotificationArea'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavBar = ({ isForCourseView }: {isForCourseView?: boolean}) => {
    // const [showMainMenu, setShowMainMenu] = useState(false)
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [showNotificationArea, setShowNotificationArea] = useState(false)

    // const handleMenuButtonClick = () => {
    //     if (showNotificationArea) {
    //         setShowNotificationArea(false)
    //     }
    //     setShowMainMenu(!showMainMenu)
    // }

    const handleBellButtonClick = () => {
        // if (showMainMenu) {
        //     setShowMainMenu(false)
        // }
        setShowNotificationArea(!showNotificationArea)
    }

    const currentPath = usePathname()

    return (
      <>
        <nav
            className='fixed top-0 z-50 border-b dark:border-b-[#333] flex flex-col justify-between w-full dark:text-[#eee] bg-white dark:bg-[#111]'
        >
            <div className='flex w-full max-w-6xl mx-auto justify-between p-4 '>
                <div className='flex justify-between space-x-1 w-full'>
                    <p className={`${silkscreen.className} flex font-semibold text-2xl max-sm:hidden`}>
                        CBET HUB
                    </p>
                    <div className='flex max-sm:w-full max-sm:justify-between'>

                        <Link
                            href={'/account'}
                            className='space-x-1 p-1 flex text-xs text-left text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-900'
                        >
                            <div className="w-9 h-9 p-2 animate-pulse border dark:border-[#333] rounded-full">
                                <UserIcon className="text-black dark:text-white" />
                            </div>
                            <p
                                className='p-0.5 w-fit dark:text-[#eee]'
                                >
                                Jude Boachie <br/>
                                judeboachiekwame@gmail.com
                            </p>
                        </Link>
                        <div className='flex space-x-1 p-1'>
                            {showNotificationArea ? (
                                <XMarkIcon
                                    className='w-9 h-9 rounded-full border border-red-600 dark:border-red-900 bg-red-300 dark:bg-red-500 p-2 cursor-pointer text-red-700 dark:text-red-900'
                                    onClick={handleBellButtonClick}
                                />
                                ):(
                                    <BellIcon
                                        className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer dark:text-[#eee]'
                                        onClick={handleBellButtonClick}
                                    />
                            )}
                            <div
                                className='hover:bg-gray-100 dark:hover:bg-blue-900 w-fit rounded-full cursor-pointer'
                            >
                                <SunIcon
                                    className='w-9 h-9 border dark:border-[#333] p-2 rounded-full'
                                />
                            </div>
                            {/* {showMainMenu ? (
                                    <XMarkIcon
                                        className='w-9 h-9 rounded-full border border-red-600 dark:border-red-900 bg-red-300 dark:bg-red-500 p-2 cursor-pointer text-red-700 dark:text-red-900'
                                        onClick={handleMenuButtonClick}
                                    />
                                ): (
                                    <Bars2Icon
                                        className='w-9 h-9 rounded-full border dark:border-[#333] p-2 cursor-pointer text-gray-700 dark:text-[#eee]'
                                        onClick={handleMenuButtonClick}
                                    />
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-6xl mx-auto px-4 py-2 dark:border-b-[#333] text-center'>
                <ul className='flex space-x-1'>
                    <Link
                        href={'/'}
                        className={`${(currentPath === '/' || isForCourseView) && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Courses
                    </Link>
                    <Link
                        href={'/blog'}
                        className={`${currentPath === '/blog' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Blog
                    </Link>
                    <Link
                        href={'/account'}
                        className={`${currentPath === '/account' && 'bg-gray-100 dark:bg-blue-800'} p-3 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-blue-900 w-full`}>
                        Account
                    </Link>
                    {/* <Link
                        href={'/logout'}
                        className={`${currentPath === '/logout' && 'bg-gray-100 dark:bg-blue-800'} hover:bg-gray-100 dark:hover:bg-blue-900 w-fit`}>
                        <ArrowRightOnRectangleIcon
                            className='w-9 h-9 border p-2 rounded-full'
                        />
                    </Link> */}
                </ul>
            </div>
        </nav>
        {/* {showMainMenu && <Menu />} */}
        {showNotificationArea && <NotificationArea />}
    </>
  )
}

export default NavBar