// import Link from "next/link"


const Tag = ({tag}: {tag?:string}) => {
  return (
    <div
        className='bg-white dark:bg-[#111] border dark:border-[#333] dark:text-gray-400 rounded-full w-fit py-0.5 px-2 text-[0.6rem]
        bg-gradient-to-b from-transparent via-transparent to-gray-100 dark:to-[#222]
        transition duration-300 ease-in-out cursor-pointer'
    >
        {/*This will contain a link to a page that will show all courses and files with the tag*/}
        {tag}
    </div>
  )
}

export default Tag
// const Tag = ({tag}: {tag?:string}) => {
//   return (
//     <Link
//         href={'/courses/tag/' + tag?.toLowerCase().replace(/\s/g, '')}
//         className='border dark:border-[#333] dark:text-[#eee] rounded-full w-fit py-0.5 px-1.5 text-xs max-sm:text-[0.6rem]
//         transition duration-300 ease-in-out'
//     >
//         {/*This will contain a link to a page that will show all courses and files with the tag*/}
//         {tag}
//     </Link>
//   )
// }

// export default Tag