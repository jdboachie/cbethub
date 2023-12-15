import { DocumentIcon } from "@heroicons/react/24/solid"

DocumentIcon

const File = () => {
  return (
    <li className='p-3 flex text-xs font-mono justify-between rounded-lg border dark:border-[#333] bg-gradient-to-b from-teal-600 dark:from-[#020229] via-teal-100 dark:via-[#111] to-white dark:to-[#000] bg-fixed bg-no-repeat bg-cover hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer'>
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