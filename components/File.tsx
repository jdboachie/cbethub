import { DocumentIcon } from "@heroicons/react/24/outline"

DocumentIcon

const File = () => {
  return (
    <li className='p-3 flex text-xs font-mono justify-between rounded-xl border dark:border-[#333] bg-gradient-to-b from-zinc-100 dark:from-[#222] via-white dark:via-[#111] to-white dark:to-black bg-fixed bg-no-repeat bg-cover hover:text-blue-500 hover:border-blue-500 cursor-pointer'>
        <div className="flex">
            <DocumentIcon className='w-4 h-4 inline-block dark:text-white'/>
            <p className="text-xs">
                Book.pdf
            </p>
        </div>
        <p className="max-sm:hidden">
            12/12/2023
        </p>
        <p className="">
            2.3Mb
        </p>
    </li>
  )
}

export default File