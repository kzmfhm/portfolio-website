"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import {SwiperSlide,Swiper } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"


const projects = [
  {
    num: "01",
    category : "frontend",
    title : "food website",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "Next.js"
      },
      {
        name : "Javascript"
      },
      {
        name : "CSS"
      },
     ],
    image : "/gif/food-website.gif",
    live:"https://flavor-craft-food-website.vercel.app/",
    github: "https://github.com/kzmfhm"
  },
  {
    num: "02",
    category : "frontend",
    title : "3D form",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "Html 5"
      },
      {
        name : "Css 3"
      },
      {
        name : "Javascript"
      },
    ],
    image : "/gif/3D-form",
    live:"https://3-d-signup-form.vercel.app/",
    github: "https://github.com/kzmfhm"
  },
  {
    num: "03",
    category : "desktop application",
    title : "image converter",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "Python"
      },
      {
        name : "Pyqt6"
      },
    ],
    image : "/gif/img-converter.gif",
    github: "https://github.com/kzmfhm"
  },
  {
    num: "04",
    category : "desktop application",
    title : "email scraper",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "Python"
      },
      {
        name : "Pyqt6"
      },
      {
        name : "BeautifulSoup"
      },
    ],
    image : "/gif/scraper",
    github: "https://github.com/kzmfhm"
  },
  {
    num: "05",
    category : "frontend",
    title : "tic-tac-toe game",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "Html 5"
      },
      {
        name : "Css 3"
      },
      {
        name : "Javascript"
      },
    ],
    image : "/gif/tic-act-game.gif",
    github: "https://github.com/kzmfhm"
  },
  {
    num: "06",
    category : "fullstack",
    title : "personal-portfolio",
    description: "Laborum quos sit quisquam quae similique laboriosam necessitatibus aliquam quam voluptatem at ullam voluptates minus, cum, in qui!",
    stack : [
      {
        name : "React"
      },
      {
        name : "Node.js"
      },
      {
        name : "Javascript"
      },
      {
        name : "SCSS"
      },
    ],
    image : "/jpg/portfolio",
    live:"https://my-portfolio-roan-delta.vercel.app/",
    github: "https://github.com/kzmfhm"
  },
]

const Work = () => {
  const [project, setProject ] = useState(projects[0])
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,
      transition:{delay:1.4, duration:0.4, ease:"easeIn"},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="">
            {/* outline num */}
            <div className="text-8xl leading-none font-bold text-transparent text-outline">{project.num}</div>
            {/* category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">slider</div>
      </div>
      </div>
    </motion.section>
  )
}

export default Work