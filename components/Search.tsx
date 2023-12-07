import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"


const Search = ({classNames} : {classNames?: string}) => {
  return (
    <div className={`${classNames} border dark:border-[#333] bg-white dark:bg-black rounded-full flex p-1`}>
        <MagnifyingGlassIcon
            className='w-10 px-2 text-gray-500'
        />
        <input
          type="text"
          name=""
          id=""
          className='border-none active:border-none focus:border-none outline-none w-full py-1.5 pr-1 text-xs text-gray-600 bg-transparent'
        />
    </div>
  )
}

export default Search