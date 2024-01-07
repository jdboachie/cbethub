import React from 'react'

const PageTitle = ({title}: {title?: string}) => {
  return (
    <div
        className={`text-3xl max-sm:text-2xl text-left font-[500] text-gray-700 dark:text-gray-50
                   px-2 py-5`}
    >
        {title? title : 'Error'}
    </div>
  )
}

export default PageTitle