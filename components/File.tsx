import { DocumentIcon } from "@heroicons/react/24/solid"

DocumentIcon

const File = () => {
  return (
    <li className='p-3 flex text-xs font-mono justify-between rounded-lg border dark:border-[#333] bg-gradient-to-t from-zinc-100 dark:from-[#222] via-white dark:via-[#111] to-white dark:to-black bg-fixed bg-no-repeat bg-cover hover:text-blue-500 hover:border-blue-500 cursor-pointer'>
        <div className="flex">
            <DocumentIcon className='w-4 h-4 mr-2 inline-block dark:text-white'/>
            <p>
                coursebook.pdf
            </p>
        </div>
        <p className="text-gray-400 flex space-x-2 max-sm:hidden">
            <span>15/01/2023</span>
            <span className="max-sm:hidde">18:36</span>
        </p>
        <p className="text-gray-400">
            12.35Mb
        </p>
    </li>
  )
}

export default File