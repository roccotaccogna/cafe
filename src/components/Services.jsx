/* eslint-disable no-unused-vars */

import { motion } from "framer-motion"; 
import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee3 from "../assets/coffee/coffee3.png";

const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Caffè Nero",
    subtitle: "lorem ipsus dolor sit amet conse elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Caffè Caldo",
    subtitle: "lorem ipsus dolor sit amet conse elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Caffè Freddo",
    subtitle: "lorem ipsus dolor sit amet conse elit.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut"
    }
  }
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.4
    }
  }
}

function Services() {
  return (
    <div className="container my-16 space-y-4">
      {/* HEADER */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1 
          className="text-3xl font-bold text-lightGray"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2
            }}
        >
          Fresco e 
            <span className="text-teal-500 ml-3"> 
              Golosi
            </span>
            <motion.p 
              className="text-sm opacity-50"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  delay: 0.6
                }}
            >
              Un caffè appena preparato e irresistibilmente 
              cremoso regala momenti unici di piacere 
              e relax quotidiano.
            </motion.p>
        </motion.h1>
      </div>
      {/* CARD */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {serviceData.map((service)=> (
          <motion.div 
            variants={cardVariants}
            className="text-center p-4 space-y-6">
            <img 
              src={service.image} 
              alt="" 
              className="img-shadow2 max-w-[200px] mx-auto 
                         hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-teal-500">
                {service.title}
              </h1>
              <p className="text-darkGray">
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services