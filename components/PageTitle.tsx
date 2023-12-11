import React from 'react'

const PageTitle = ({title}: {title: string}) => {
  return (
    <div
        className='text-3xl text-left font-[500] border-b dark:border-b-[#333] dark:text-[#eee]
                   px-5 py-7'
    >
        {title}
    </div>
  )
}

export default PageTitle