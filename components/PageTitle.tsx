import React from 'react'

const PageTitle = ({title}: {title?: string}) => {
  return (
    <div
        className={`gradient-text text-5xl max-sm:text-3xl text-left font-bold
                   px-2 py-5`}
    >
        {title? title : 'Error'}
    </div>
  )
}

export default PageTitle