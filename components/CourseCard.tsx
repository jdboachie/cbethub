import Tag from "./Tag"

const CourseCard = (
    {
        courseName,
        courseCode,
        lecturerName,
        tags,
    } : {
        courseName?: string,
        courseCode?: string,
        lecturerName?: string,
        tags?: string[],
    }
) => {
  return (
    <div
        className='border dark:border-[#333] rounded-lg w-fit h-[50vh] max-sm:h-fit p-5 justify-end items-start flex flex-col space-y-2 m-1.5 cursor-pointer
                bg-gradient-to-b from-transparent via-transparent to-zinc-50 shadow-md transition duration-300 ease-in-out hover:shadow-lg
                dark:from-[#111] dark:via-[#111] dark:to-zinc-900 dark:shadow-lg'
    >
        <p
            className='text-left text-lg max-sm:text-sm font-semibold dark:text-[#eee]'
        >
            {courseName}
        </p>
        <p
            className='text-left text-xs'
        >
            {lecturerName}
        </p>
        {/* <div
            className='flex space-x-0.5 rounded-md border p-1 text-gray-800 bg-gradient-to-b from-transparent via-transparent to-zinc-300'
        >
            <ArrowDownTrayIcon
                className='w-5 h-5'
            />
            <p
                className='text-xs p-0.5'
            >
                53
            </p>
        </div> */}
        <div
            className='text-xs text-left text-gray-500'
        >
            15 files
        </div>

        <div
            className="w-full flex flex-wrap space-x-0.5 space-y-0.5"
        >
            {tags?.map((tag, index) => (
                <Tag
                    key={index}
                    tag={tag}
                />
            ))}
        </div>
    </div>
  )
}

export default CourseCard