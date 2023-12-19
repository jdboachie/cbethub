import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"


const Search = ({className} : {className?: string}) => {
  return (
    <div className={`${className} w-full border dark:border-[#333] bg-white dark:bg-black rounded-2xl flex p-2`}>
        <MagnifyingGlassIcon
            className='w-10 px-2.5 text-gray-500 dark:text-[#eee]'
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="The funnel thingie no dey work..."
          className='border-none active:border-none focus:border-none outline-none w-full py-1.5 text-sm text-gray-700 placeholder:text-gray-400 dark:text-gray-50 bg-transparent'
        />
    </div>
  )
}

export default Search