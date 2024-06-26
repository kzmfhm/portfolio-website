"use client"
import { FaReact, FaFigma, FaHtml5, FaNodeJs,FaCss3,FaJs } from "react-icons/fa"
import {SiTailwindcss,SiNextdotJs} from "react-icons/si"


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
  description: "Asperiores sunt, molestias animi error temporibus fugiat veritatis eum! Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
  items : [
    {
      company : "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - present"
    },
    {
      company : "Web Design Studio",
      position: "Front End Developer Intern",
      duration: "Summer 2021"
    },
    {
      company : "Ecommerce Startup",
      position: "Freelaunce Web Developer",
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
  description: "Asperiores sunt, molestias animi error temporibus fugiat veritatis eum! Aperiam asperiores ipsa eos distinctio quisquam eligendi ab illo error, unde tenetur laborum.",
  items : [
    {
      institution : "Online Course Plateform",
      degree: "Full Stack Development Bootcamp",
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
      icon : <FaReact/>,
      name: "react.js",
    },
    {
      icon : <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon : <SiNextdotJs/>,
      name: "next.js",
    },
    {
      icon : <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon : <FaFigma/>,
      name: "figma",
    }
  ]
}
const Resume = () => {
  return (
    <div></div>
  )
}

export default Resume