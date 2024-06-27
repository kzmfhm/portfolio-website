"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { FaReact, FaFigma, FaHtml5, FaNodeJs,FaCss3,FaJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript ,SiCanva,SiTailwindcss, SiBootstrap, SiExpress } from "react-icons/si";

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, molestias animi error temporibus fugiat veritatis eum! Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
    info: {
      fieldName : "Name",
      fieldValue: "kzm"
    },
    info: {
      fieldName : "Phone",
      fieldValue: "(+92) 555-5555-55"
    },
    info: {
      fieldName : "Experience",
      fieldValue: "3+ Years"
    },
    info: {
      fieldName : "Skype",
      fieldValue: "kzm.01"
    },
    info: {
      fieldName : "Email",
      fieldValue: "johndoe@gmail.com"
    },
    info: {
      fieldName : "Freelaunce",
      fieldValue: "Available"
    },
    info: {
      fieldName : "Languages",
      fieldValue: "English Spanish"
    }
  }

const experience = {
  icon: "",
  title:"My experience",
  description: "Molestias animi error temporibus fugiat veritatis eum! Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
  items : [
    {
      company : "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - present"
    },
    {
      company : "Web Design Studio",
      position: "Front End Developer",
      duration: "Summer 2021"
    },
    {
      company : "Ecommerce Startup",
      position: "Freelauncer",
      duration: "2023 - winter 2024"
    },
    {
      company : "Digital Agency",
      position: "UI/UX Designer",
      duration: "2022 - 2023"
    },
 
  ]
}

const education = {
  icon: "",
  title:"My education",
  description: "Asperiores sunt, molestias animi error Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
  items : [
    {
      institution : "Online Course Plateform",
      degree: "Full Stack Developer",
      duration: "2023"
    },
    {
      institution : "Codecademy",
      degree: "Frontend Track",
      duration: "2022"
    },
    {
      institution : "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021"
    },
    {
      institution : "Virtual University of Pakistan",
      degree: "Bs Computer Science",
      duration: "2028 - 2022"
    },
  ]
}

const skills = {
  title:"My skills",
  description: "Asperiores sunt, molestias animi error temporibus fugiat veritatis eum! Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
  skillsList : [
    {
      icon : <FaHtml5/>,
      name: "html 5",
    },
    {
      icon : <FaCss3/>,
      name: "css3",
    },
    {
      icon : <FaJs/>,
      name: "javascript",
    },
    {
      icon : <SiTypescript/>,
      name: "typescript",
    },
    {
      icon : <FaReact/>,
      name: "react.js",
    },
    {
      icon : <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon : <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon : <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon : <FaFigma/>,
      name: "figma",
    },
    {
      icon : <SiCanva/>,
      name: "canva",
    },
    {
      icon : < SiBootstrap/>,
      name: "bootstrap",
    },
    {
      icon : < SiExpress/>,
      name: "express.js",
    }
  ]
}
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, 
    transition:{delay:1.4, duration:0.4,ease:"easeIn"}
    }}
    className="min-h-[80vh] xpressjsflex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full leading-loose">
            <div className="flex flex-col text-center gap-[30px] xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent mb-4 mt-4">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3 mt-[-15px]">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
             {/* education*/}
             <TabsContent value="education" className="w-full leading-loose">
             <div className="flex flex-col text-center gap-[30px] xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[204px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent mb-3">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3 ">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
              {/* skills */}
            <TabsContent value="skills" className="w-full h-full leading-loose">
              <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px] ">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillsList.map((skill,index) =>{
                  return <li key={index}>
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center items-center group">
                        <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                   </TooltipProvider>
                  </li>
                })}</ul>
                </ScrollArea>
              </div>
            </TabsContent>
             {/* about*/}
             <TabsContent value="about" className="w-full">exience</TabsContent>
          </div>
        </Tabs>
      </div>


    </motion.div>
  )
}

export default Resume