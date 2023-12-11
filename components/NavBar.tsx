import { useState } from 'react'
import { silkscreen } from '@/lib/fonts'

import {
    Bars2Icon,
    BellIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Menu from '@/components/Menu'
import Search from '@/components/Search'


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
            <div className='flex w-full justify-between bg-white p-4 border-b'>
                <p className={`text-xl font-semibold ${silkscreen.className} dark-blue-gradient`}>
                    CBET HUB
                </p>
                <div className='flex space-x-2'>
                    <BellIcon
                        className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                    />
                    {showMainMenu ? (
                            <XMarkIcon
                                className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                                onClick={handleMenuButtonClick}
                            />
                        ): (
                            <Bars2Icon
                                className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                                onClick={handleMenuButtonClick}
                            />
                    )}
                </div>
            </div>
            <div className='w-full p-3 bg-white dark:bg-black border-b'>
                <Search />
            </div>
        </nav>
        {showMainMenu && <Menu />}
    </>
  )
}

export default NavBar