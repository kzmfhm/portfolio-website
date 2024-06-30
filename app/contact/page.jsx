"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectItem, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+92) 555 555 555"
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "kzm.01@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: "Code Corner Tech Town, 12345"
  },
]
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
      >
     <div className="mx-auto container">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[64%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-5xl text-accent">Let&#39;s work together</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem ab iure architecto eaque.</p>
          {/* input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="First Name"/>
            <Input type="lastname" placeholder="Last Name"/>
            <Input type="email" placeholder="Email Address"/>
            <Input type="phone" placeholder="Phone Number"/>
          </div>
          {/* select */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              <SelectLabel className="">
                Select a service
              </SelectLabel>
              <SelectItem value="est">Web Development</SelectItem>
              <SelectItem value="cst">UI/UX Design</SelectItem>
              <SelectItem value="mst">Logo Design</SelectItem>
              </SelectGroup >
            </SelectContent>
          </Select>
          <Textarea className="h-[200px]" placeholder="Type your message here"/>
          {/* buttons */}
          <Button size="md" className="xl:w-[200px] px-4">Send message</Button>
        </form>
        </div>
        {/* info */}
        <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
       <ul className="flex flex-col gap-10">
        {info.map((item,index) => {
          return <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">
                {item.icon}
              </div>
              </div>
              <div className="flex-1">
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-lg">{item.description}</h3>
              </div>
          </li>
        })}
       </ul>
      </div>
      </div>
     </div>
    </motion.section>
  )
}

export default Contact