import Link from 'next/link'

const DropDownMenu = () => {
  return (
    <div className='fixed top-10 right-4 backdrop-blur-xl'>
        <div
            className='border dark:border-[#333] rounded-lg w-fit h-fit justify-start items-start flex flex-col space-y-2 cursor-pointer shadow-lg'
        >
            <div className='p-3 space-y-1 text-gray-500 text-xs flex flex-col w-max border-b dark:border-b-[#333] text-left'>
                <p className=''>Jude Boachie</p>
                <p className=''>judeboachiekwame@gmail.com</p>
                <p className=''>Computer Engineering</p>
            </div>
            <ul className='w-full p-1'>
                <li className='flex space-x-1 py-2 px-3 rounded-lg text-left text-xs text-gray-600 hover:bg-gray-100 w-full'>
                    <Link href={''}>Home</Link>
                </li>
                <li className='flex space-x-1 py-2 px-3 rounded-lg text-left text-xs text-gray-600 hover:bg-gray-100 w-full'>
                    <Link href={''}>Files</Link>
                </li>
                <li className='flex space-x-1 py-2 px-3 rounded-lg text-left text-xs text-gray-600 hover:bg-gray-100 w-full'>
                    <Link href={''}>Account</Link>
                </li>
                <li className='flex space-x-1 py-2 px-3 rounded-lg text-left text-xs text-gray-600 hover:bg-gray-100 w-full'>
                    <Link href={''}>Settings</Link>
                </li>
                <li className='flex space-x-1 py-2 px-3 rounded-lg text-left text-xs text-gray-600 hover:bg-gray-100 w-full'>
                    <Link href={''}>Logout</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DropDownMenu