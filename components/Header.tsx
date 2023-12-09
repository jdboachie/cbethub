import { useState } from 'react'
import { silkscreen } from '@/lib/fonts'

import {
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/react/20/solid'
import Menu from '@/components/Menu'


const Header = () => {
    const [showMainMenu, setShowMainMenu] = useState(false)

    const handleMenuButtonClick = () => {
        setShowMainMenu(!showMainMenu)
    }

  return (
    <>
        <nav
            className='fixed top-0 flex backdrop-blur justify-between w-full p-4 border-b dark:border-b-[#333]'
        >
            <p className={`text-xl font-semibold ${silkscreen.className} dark-blue-gradient`}>
                CBET HUB
            </p>
            <div className='flex space-x-2'>
                <MagnifyingGlassIcon
                    className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                />
                {showMainMenu ? (
                        <XMarkIcon
                            className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                            onClick={handleMenuButtonClick}
                        />
                    ): (
                        <Bars3Icon
                            className='w-8 h-8 rounded-full border dark:border-[#333] p-1.5 cursor-pointer dark:text-[#eee]'
                            onClick={handleMenuButtonClick}
                        />
                )}
            </div>
        </nav>
        {showMainMenu && <Menu />}
    </>
  )
}

export default Header