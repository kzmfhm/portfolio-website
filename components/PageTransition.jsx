"use client"
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageTransition = ({children}) => {
    const pathName = usePathname();
  return (
    <AnimatePresence>
        <div key={pathName}>
            <motion.div initial={{opacity: 1}}
                animate={{opacity: 0, 
                transition: { delay: 1, duration: 0.4, ease: easeInOut },
            }}
                className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'>
            </motion.div>
            {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
