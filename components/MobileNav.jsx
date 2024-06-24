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
            <div>
                logo
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav