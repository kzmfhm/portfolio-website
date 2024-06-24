"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const PageTransition = ({children}) => {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

export default PageTransition