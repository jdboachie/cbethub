'use client'

import React from "react"

import NavBar from "@/components/NavBar"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <NavBar isForBlogView />
        {children}
    </div>
  )
}

export default Layout