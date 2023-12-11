'use client'

import Button from "@/components/Button"
import Header from "@/components/NavBar"
import Link from "next/link"


const LoginPage = () => {
  return (
    <div>
        <Header />
        <main className="pt-16 p-3 h-screen flex flex-col justify-center">
            <h1 className="p-4 mb-4 text-center font-semibold text-3xl dark:text-[#eee]">
                Log in to CBET hub
            </h1>
            <div className="flex flex-col space-y-3 max-w-4xl">
                <form
                    action=""
                    method="post"
                    className="space-y-2"
                    >
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-xs text-gray-600 dark:text-[#eee]">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-3 border rounded-lg bg-white dark:bg-black dark:border-[#333]"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-xs text-gray-600 dark:text-[#eee]">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="p-3 border rounded-lg bg-white dark:bg-black dark:border-[#333]"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="p-3 border rounded-lg dark:border-[#333]"
                            />
                            <label htmlFor="remember" className="text-xs text-gray-600 dark:text-[#eee]">Remember me</label>
                        </div>
                        <Link
                            href="/forgot-password"
                            className="text-xs text-gray-600 dark:text-[#eee]"
                        >
                                Forgot password?
                        </Link>
                    </div>
                    <Button
                        classNames="bg-blue-700"
                    >
                        Log in
                    </Button>
                </form>
                <Button
                    classNames="bg-[#333]"
                >
                    Continue with GitHub
                </Button>
                <Button
                    classNames="bg-[#eee] text-[#333]"
                >
                    Continue with Google
                </Button>
                {/* <Button
                    classNames="bg-purple-700"
                >
                    Continue with GitLab
                </Button>
                <Button
                    classNames="bg-blue-700"
                >
                    Continue with BitBucket
                </Button> */}
            </div>
        </main>
    </div>
  )
}

export default LoginPage