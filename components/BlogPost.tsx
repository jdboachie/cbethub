import Image from "next/image"
import Link from "next/link"

import { UserIcon } from "@heroicons/react/24/outline"

const BlogPost = (
    {
        imgURL,
        title,
        grid,
        id,
    } : {
        imgURL?: string,
        title?: string,
        grid?: boolean,
        id?: string,
    }
) => {
  return (
    <Link
        className={`border h-fit m-1 w-fit rounded-xl dark:border-[#333] justify-end items-start flex flex-col space-y-2 cursor-pointer
        hover:shadow active:bg-transparent dark:bg-black bg-white
        transition duration-250 ease-in-out hover:text-blue-500`}
        href={`/blog/${id}`}
    >
        <Image
        alt='blog post title'
        src={imgURL || '/blogpic.jpg'}
        width={10000}
        height={10000}
        className='object-cover w-full rounded-t-xl'
        />
        <div
            className={`space-x-1 my-2 p-3 flex ${grid && 'flex-col'} text-left text-gray-700 dark:text-[#ccc] rounded-lg hover:bg-gray-100 dark:hover:bg-blue-900`}
        >
            <div className="w-9 h-9 p-2 animate-pulse border dark:border-[#333] rounded-full">
                <UserIcon className="text-black dark:text-white" />
            </div>
            <p
                className='p-0.5 w-fit text-xs'
                >
                Jude Boachie<br />
                13th December, 2023
            </p>
        </div>
        <p className={`font-[500] p-3 pt-2 ${grid && 'pt-0'} text-xl`}>
            {title || 'American Express is acquiring Kabbage for as much as $850M'}
        </p>
    </Link>
  )
}

export default BlogPost