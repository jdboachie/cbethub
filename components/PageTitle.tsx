import React from 'react'
import { lato } from '@/lib/fonts'

const PageTitle = ({title}: {title?: string}) => {
  return (
    <div
        className={`text-3xl text-left font-[500] dark:text-[#eee]
                   px-5 py-7`}
    >
        {title? title : 'Error'}
    </div>
  )
}

export default PageTitle