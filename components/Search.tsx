import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


const Search = ({className} : {className?: string}) => {
  return (
    <div className={`${className} w-full border dark:border-[#333]  rounded-xl flex p-1`}>
        <MagnifyingGlassIcon
            className='w-10 px-2.5 text-gray-500 dark:text-[#eee]'
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="The funnel thingie no dey work..."
          className='border-none active:border-none focus:border-none outline-none w-full py-1.5 text-xs text-gray-600 placeholder:text-gray-400 dark:text-gray-200 bg-transparent'
        />
    </div>
  )
}

export default Search