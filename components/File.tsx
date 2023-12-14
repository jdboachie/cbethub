import { DocumentIcon } from "@heroicons/react/24/solid"

DocumentIcon

const File = () => {
  return (
    <li className='p-3 flex text-xs font-mono justify-between rounded-lg border dark:border-[#333] bg-white dark:bg-[#111] hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer'>
        <div className="flex">
            <DocumentIcon className='w-4 h-4 mr-1 inline-block dark:text-white'/>
            <p className="text-xs">
                Book.pdf
            </p>
        </div>
        <p className="">
            12/12/2023
        </p>
        <p className="">
            2.3Mb
        </p>
    </li>
  )
}

export default File