'use client'

import {
    Squares2X2Icon,
    RectangleStackIcon,
    FunnelIcon,
} from "@heroicons/react/24/solid"
import { useState } from "react"
import Search from "./Search"


const Inquire = () => {

    const [view , setView] = useState<'grid' | 'list'>('list')

  return (
    <div
            className='flex space-x-1 justify-between'
        >
            <Search
                className=''
            />
            <div className="flex space-x-1 text-gray-700 dark:text-gray-50">

                {view === 'list' ? (
                    <Squares2X2Icon
                        onClick={() => setView('grid')}
                        className='cursor-pointer w-12 h-12 border dark:border-[#333] rounded-2xl p-3 bg-white dark:bg-black dark:text-[#eee]' />
                ) : (
                    <RectangleStackIcon
                        onClick={() => setView('list')}
                        className='cursor-pointer w-12 h-12 border dark:border-[#333] rounded-2xl p-3 bg-white dark:bg-black dark:text-[#eee]' />
                )}
                <FunnelIcon className='w-12 h-12 border dark:border-[#333] rounded-2xl p-3 bg-white dark:bg-black dark:text-[#eee]' />
            </div>
        </div>
  )
}

export default Inquire