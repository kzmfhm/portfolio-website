"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
    const links = [
        {name:'home',
            path: '/'
        },
        {name:'services',
            path: '/services'
        },
        {name:'resume',
            path: '/resume'
        },
        {name:'work',
            path: '/work'
        },
        {name:'contact',
            path: '/contact'
        },
    ]

    const pathName = usePathname();
    console.log(pathName)
  return (
    <nav className='flex gap-8'>
        {links.map((link, index) => {
            return <Link href={link.path} key={index}
            className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-2xl capitalize font-medium hover:text-accent z-40`}>
                {link.name}</Link>
        })}
    </nav>
  )
}

export default Nav
