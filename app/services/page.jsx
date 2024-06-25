"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs";


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor suscipit perferendis perspiciatis quibusdam eveniet qui, eaque hic.',
    href:''
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor suscipit perferendis perspiciatis quibusdam eveniet qui, eaque hic.',
    href:''
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'Lorem ipsum dolor suscipit perferendis perspiciatis quibusdam eveniet qui, eaque hic.',
    href:''
  },
  {
    num: '04',
    title: 'Frontend Website Development',
    description: 'Lorem ipsum dolor suscipit perferendis perspiciatis quibusdam eveniet qui, eaque hic.',
    href:''
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1 , 
          transition:{delay:2.4, duration:0.4, ease:"easeIn"},}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index) => {
            return(<div key={index} className="flex-1 flex justify-center gap-6 group flex-col">
              {/* top */}
              <div className="w-full flex items-center justify-between ">
              <div className="text-5xl font-extrabold">{service.num}</div>
              <Link href={service.href}>
              <BsArrowDownRight/>
              </Link>
              </div>
              <h2>
                {service.title}
              </h2>
              <p>{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            
            </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services