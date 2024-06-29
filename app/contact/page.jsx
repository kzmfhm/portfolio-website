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
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-3xl text-accent">Let&#39;s work together</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Exercitationem ab iure architecto eaque.</p>
          {/* input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="First Name"/>
            <Input type="lastname" placeholder="Last Name"/>
            <Input type="email" placeholder="Email Address"/>
            <Input type="phone" placeholder="Phone Number"/>
          </div>
          </form>
        </div>
        {/* info */}
        <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          info
        </div>
      </div>
     </div>
    </motion.section>
  )
}

export default Contact