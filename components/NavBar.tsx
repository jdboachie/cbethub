import {
    HomeIcon,
    BookOpenIcon,
    NewspaperIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {
    return (
      <div className='fixed w-[96%] p-px rounded-full bg-vc-border-gradient-light dark:bg-vc-border-gradient-dark top-[3vh] max-sm:top-[86vh] max-sm:bottom-[3vh] z-50 max-w-4xl'>
        <nav
            className='p-3 w-full shadow-md rounded-full flex justify-between dark:text-[#eee] bg-white dark:bg-black'
        >
            <div className='text-gray-600 dark:text-gray-50'>
                <ul className='flex space-x-2'>
                    <Link
                        href={'/'}
                        className={`p-1 rounded-full hover:scale-110 active:scale-90 transition duration-250 ease-in-out bg-gray-100 dark:bg-[#222]`}
                    >
                        <HomeIcon
                            className='p-2 w-10 h-10'
                        />
                    </Link>
                    <Link
                        href={'/courses'}
                        className={`p-1 rounded-full hover:scale-110 active:scale-90 transition duration-250 ease-in-out bg-gray-100 dark:bg-[#222]`}
                    >
                        <BookOpenIcon
                            className='p-2 w-10 h-10'
                        />
                    </Link>
                    <Link
                        href={'/blog'}
                        className={`p-1 rounded-full hover:scale-110 active:scale-90 transition duration-250 ease-in-out bg-gray-100 dark:bg-[#222]`}
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
                    className='flex rounded-full hover:scale-90 active:scale-105 transition duration-250 ease-in-out'
                >
                    <Image
                        src={'/jdboachie.jpg'}
                        alt='user image'
                        width={1000}
                        height={1000}
                        objectFit='cover'
                        className='rounded-full w-12 h-12'
                    />
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar