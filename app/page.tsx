import { schibstedGrotesk } from "@/lib/fonts"
import Link from 'next/link'


const Home = () => {
  return (
    <div
        className="h-[76vh]"
    >
        <div
            className={`${schibstedGrotesk.className} flex flex-col justify-center items-center h-full text-center font-extrabold`}
        >
            <p className="text-7xl max-sm:text-5xl text-transparent bg-gradient-to-r bg-clip-text from-[#333] via-[#222] dark:from-zinc-400 dark:via-slate-500 to-black dark:to-white">
                Welcome to the
            </p>
            <span className={`text-7xl max-sm:text-5xl pb-12 text-transparent bg-gradient-to-r from-orange-500 via-red-700 to-blue-600 bg-clip-text`}>
                CBET HUB
            </span>
            <p className="text-xl max-sm:text-sm pb-10 font-semibold text-transparent bg-gradient-to-r bg-clip-text from-[#333] via-[#222] dark:from-zinc-400 dark:via-slate-500 to-black dark:to-white">
                Your one stop shop for all things CBET
            </p>
            <div className="flex max-sm:flex-col font-normal space-x-2 max-sm:space-x-0 max-sm:space-y-2 max-sm:w-5/6">
                <Link
                    href='/courses'
                    className="px-16 py-4 w-full text-lg text-center text-black dark:text-white bg-gradient-to-r from-orange-500/20 via-red-700/20 to-blue-600/20 rounded-2xl"
                >
                    Courses
                </Link>
                <Link
                    href='/blog'
                    className="px-16 py-4 w-full text-lg text-center text-black dark:text-white bg-gradient-to-r from-orange-500/20 via-red-700/20 to-blue-600/20 rounded-2xl"
                >
                    Blog
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Home