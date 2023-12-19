'use client'

import {
    Squares2X2Icon,
    RectangleStackIcon,
    FunnelIcon,
} from "@heroicons/react/24/solid"
import Search from "./Search"


const Inquire = () => {


  return (
    <div
            className='flex space-x-1 justify-between'
        >
            <Search
                className=''
            />
            <div className="text-gray-700 dark:text-gray-50">
                <FunnelIcon className='w-12 h-12 border dark:border-[#333] rounded-2xl p-3 bg-white dark:bg-black dark:text-[#eee]' />
            </div>
        </div>
  )
}

export default Inquire