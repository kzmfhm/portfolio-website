"use client"
import React from 'react'
import { Sheet , SheetContent, SheetTrigger} from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {CiMenuFries} from "react-icons/ci"

const MobileNav = () => {
    const pathName = usePathname();
    const links = [
        {
            name: "home",
            path: "/",
        },
        {
            name: "services",
            path: "/services",
        },
        {
            name: "resume",
            path: "/resume",
        },
        {
            name: "work",
            path: "/work",
        },
        {
            name: "contact",
            path: "/contact",
        },
    ]
  return (
    <Sheet>
        <SheetTrigger className='flex ustify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center text-2xl'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                kzm <span className='text-accent rounded-full'>.</span>
                </h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index) => {
                    return <Link href={link.path} key={index}
                    className={`${link.path === pathName && "text-accent border-b-2 border-accent"} 
                    "text-xl capitalize hover:text-accent"`}>{link.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav