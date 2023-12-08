import React from 'react'

const Tag = ({tag}: {tag?:string}) => {
  return (
    <div
        className='border dark:border-[#333] dark:text-[#eee] rounded-full w-fit py-1.5 px-2.5 text-xs'
    >
        {/*This will contain a link to a page that will show all courses and files with the tag*/}
        {tag}
    </div>
  )
}

export default Tag