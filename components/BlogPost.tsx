import Image from "next/image"

import { UserIcon } from "@heroicons/react/24/solid"

const BlogPost = (
    {
        imgURL,
        title,
    } : {
        imgURL?: string,
        title?: string,
    }
) => {
  return (
    <div
        className={`border h-fit m-2 w-fit rounded-lg dark:border-[#333] p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer
        hover:shadow active:bg-transparent dark:bg-[#111] bg-white
        transition duration-250 ease-in-out hover:text-blue-500`}
    >
        <Image
        alt='blog post title'
        src={imgURL || '/blogpic.jpg'}
        width={5000}
        height={5000}
        className='object-cover w-full rounded-lg'
        />
        <div
            className='space-x-1 my-2 p-1 flex text-left text-gray-700 dark:text-[#ccc] rounded-lg hover:bg-gray-100 dark:hover:bg-blue-900'
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
        <p className="font-semibold pt-4">
        {title || 'American Express is acquiring Kabbage for as much as $850M'}
        </p>
    </div>
  )
}

export default BlogPost