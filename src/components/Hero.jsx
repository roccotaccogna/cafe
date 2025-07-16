/* eslint-disable no-unused-vars */

import { useState } from "react";
import BgImage from "../assets/bg-slate.png";
import Coffee from "../assets/black.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

function Hero() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* NAVBAR */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* HERO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                          place-items-center min-h-[850px]"
          >
            {/* TESTO */}
            <div className="text-lightOrange mt-[100px]
                            md:mt-0 p-4 space-y-28"
            >
              <motion.h1 
                className="text-7xl font-bold leading-tight ml-14"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1
                }}
              >
                Black Hole
              </motion.h1>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2
                }}
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">
                    Black Coffee
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] 
                                h-[190px] bg-gray-700/25"
                >
                </div>
              </motion.div>
            </div>

            {/* HERO */}
            <div className="relative">
              <motion.img 
                src={Coffee} 
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4
                }}
              />
              {/* CERCHIO */}
              <motion.div 
                className="absolute top-24 -right-16 border-teal-500 
                           rounded-full h-[180px] w-[180px] z-10
                           border-[20px]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8
                }}
              ></motion.div>

              <motion.div 
                className="absolute -top-20 left-[200px] z-[1]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8
                }}
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Hole
                </h1>
              </motion.div>
            </div>

            {/* TERZO */}
            <div className="hidden lg-block">
              <motion.div 
                className="text-lightOrange mt-[100px]
                          md:mt-0 p-4 space-y-28"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2
                  }}
              >
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  Black Hole
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">
                      Black Hole
                    </h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's 
                      standard.
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] 
                                  h-[190px] bg-darkGray/50"
                  >
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* SIDEBAR */}
        {
          sidebar && (
              <motion.div 
                className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b 
                          from-teal-500/80 to-teal-800/80 backdrop-blur-sm z-10"
                initial={{ x:"100%" }}
                whileInView={{ x: 0 }}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <div 
                    className="flex flex-col justify-center gap-6 text-white"
                  >
                    {/* LINEA */}
                    <div className="w-[1px] h-[70px] bg-white"></div>
                    {/* SOCIAL */}
                    <div 
                      className="inline-block p-2 cursor-pointer rounded-full 
                                border border-white"
                    >
                      <FaFacebookF className="text-2xl"/>
                    </div>
                    <div
                      className="inline-block p-2 cursor-pointer rounded-full 
                                border border-white"
                    >
                      <FaTwitter className="text-2xl"/>
                    </div>
                    <div
                      className="inline-block p-2 cursor-pointer rounded-full 
                                border border-white"
                    >
                      <FaInstagram className="text-2xl"/>
                    </div>
                    
                    <div className="w-[1px] h-[70px] bg-white"></div>
                  </div>
                </div>
              </motion.div>
          )
        }
      </section>
    </main>
  )
}

export default Hero