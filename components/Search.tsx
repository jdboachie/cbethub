import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"


const Search = ({className} : {className?: string}) => {
  return (
    <div className={`${className} w-full border dark:border-[#333] bg-white dark:bg-[#111] rounded-lg flex p-0.5`}>
        <MagnifyingGlassIcon
            className='w-10 px-2.5 text-gray-500 dark:text-[#eee]'
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="The funnel thingie depends on backend..."
          className='border-none active:border-none focus:border-none outline-none w-full py-1.5 pr-1 text-xs text-gray-600 bg-transparent'
        />
    </div>
  )
}

export default Search