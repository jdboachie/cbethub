import React from 'react'

const Button = ({children, classNames}: {children?: React.ReactNode, classNames?:string}) => {
  return (
    <div>
        <button
            className={`${classNames} max-sm:w-full rounded-lg border text-[#eee] w-full p-3 dark:border-[#333] cursor-pointer`}
        >
                {children}
        </button>
    </div>
  )
}

export default Button