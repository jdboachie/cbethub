import {
    HomeIcon,
    BookOpenIcon,
    NewspaperIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {
    return (
      <>
        <nav
            className='fixed p-3 w-[90%] max-w-6xl rounded-3xl top-5 z-50 border dark:border-[#333] flex justify-between dark:text-[#eee] backdrop-blur-lg'
        >
            <div className='text-gray-600 dark:text-gray-50'>
                <ul className='flex space-x-2'>
                    <Link
                        href={'/'}
                        className={`border dark:border-[#333] p-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#222]`}
                    >
                        <HomeIcon
                            className='p-2 w-10 h-10'
                        />
                    </Link>
                    <Link
                        href={'/courses'}
                        className={`border dark:border-[#333] p-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#222]`}
                    >
                        <BookOpenIcon
                            className='p-2 w-10 h-10'
                        />
                    </Link>
                    <Link
                        href={'/blog'}
                        className={`border dark:border-[#333] p-1 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#222]`}
                    >
                        <NewspaperIcon
                            className='p-2 w-10 h-10'
                        />
                    </Link>
                </ul>
            </div>
            <div className=''>
                <Link
                    href={'/account'}
                    className='flex rounded-2xl'
                >
                    <Image
                        src={'/jdboachie.jpg'}
                        alt='user image'
                        width={1000}
                        height={1000}
                        objectFit='cover'
                        className='rounded-2xl w-12 h-12'
                    />
                </Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar