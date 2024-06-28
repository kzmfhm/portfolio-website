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
      <div className="">
        {/* form */}
        <div className="">
          <form >
            form
          </form>
        </div>
      </div>
     </div>
    </motion.section>
  )
}

export default Contact