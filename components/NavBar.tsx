'use client'

import {
    HomeIcon,
    BookOpenIcon,
    NewspaperIcon,
    SunIcon,
    MoonIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'


const NavBar = () => {

    const [darkMode, setDarkMode] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = (event: { target: any }) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        document.addEventListener("click", closeDropdown);
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, []);

    return (
      <div className='fixed w-[96%] p-px rounded-full bg-vc-border-gradient-light dark:bg-vc-border-gradient-dark top-[3vh] z-50 max-w-4xl'>
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
            <div
                ref={dropdownRef}
                className='relative rounded-full bg-vc-border-gradient-light dark:bg-vc-border-gradient-dark p-px pointer-cursor'
            >
          <div onClick={toggleDropdown}>
            <Image
              src={'/jdboachie.jpg'}
              alt='user image'
              width={1000}
              height={1000}
              objectFit='cover'
              className='rounded-full w-11 h-11 hover:scale-110 active:scale-90 transition duration-250 ease-in-out'
            />
          </div>
          {/* Drop down */}
          {dropdownOpen && (
            <div className='absolute top-14 right-0 mt-2 w-48 bg-white border dark:border-[#444] border-gray-200 dark:bg-black dark:text-gray-300 rounded-lg shadow-lg'>
              <div className='p-1 text-right'>
                <Link
                    href='/account'
                    className=' block rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'
                >
                    Account
                </Link>
                <Link
                    href='/settings'
                    className='block rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'
                >
                    Settings
                </Link>
                <button
                    onClick={toggleDarkMode}
                    className={`rounded-full text-sm m-2 p-4 focus:outline-none ${darkMode ? 'bg-[#333] text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-white'}`}
                >
                    {darkMode ? (
                    <SunIcon
                        className='w-5 h-5'
                    />
                    ) : (
                    <MoonIcon className='w-5 h-5' />
                    )}
                </button>
                </div>
            </div>
          )}
          </div>
        </nav>
    </div>
  )
}

export default NavBar