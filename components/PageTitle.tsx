import React from 'react'
import { lato } from '@/lib/fonts'

const PageTitle = ({title}: {title?: string}) => {
  return (
    <div
        className={`text-5xl max-sm:text-4xl text-left font-[500] text-gray-700 dark:text-gray-50
                   px-2 py-7`}
    >
        {title? title : 'Error'}
    </div>
  )
}

export default PageTitle