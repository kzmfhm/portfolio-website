"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { SwiperSlide,Swiper} from "swiper/react"

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
  const [project, setProject ] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
   }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,
      transition:{delay:1.4, duration:0.4, ease:"easeIn"},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div className="text-6xl font-bold text-transparent text-outline">{project.num}</div>
            {/* category */}
            <h2 className="text-[32px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            {/* description */}
            <p className="text-white/60">{project.description}</p>
           {/* stack */}
           <ul className="flex gap-4">
            {project.stack.map((item, index) => {
                return <li key={index} className="text-lg text-accent">
                    {item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && "," }
                </li>
            })}
           </ul>
           {/* border */}
           <div className="border border-whire/20"></div>
           {/* buttons */}
           <div className="flex items-center gap-4">
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Live project</p>
              </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            </Link>
            {/* github */}
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-2xl group-hover:text-accent"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github repo</p>
              </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            </Link>
           </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
            spaceBetween={30} 
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
            {projects.map((project,index) => {
              return <SwiperSlide key={index} className="w-full">
                <div className="relative group h-[460px] flex justify-center items-center bg-pink-50/20">
                {/* overlay */}
                <div className=""></div>
                {/* image */}
                <div className="relative w-full h-full">
                <Image src={project.image} alt={project.category} fill className="object-cover">

                </Image>
                </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
      </div>
    </motion.section>
  )
}

export default Work