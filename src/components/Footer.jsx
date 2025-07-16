/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Credits from "../assets/website/credit-cards.webp";


function Footer() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-700 pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* DETTAGLI COMPAGNIA */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5}}
            transition={{ 
              delay: 0.2,
              duration: 0.6
            }}
          >
            <h1 className="text-3xl font-bold uppercase">
              {'</>'} Cafe
            </h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo tempora nostrum autem quibusdam. Laboriosam 
              tempora quia veritatis, tenetur ad labore?
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +39 333 1234567
              </p>

              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Milano, Italy
              </p>

            </div>
          </motion.div>


          {/* LINK FOOTER */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5}}
            transition={{ 
              delay: 0.2,
              duration: 0.6
            }}
          >
              <h1 className="text-3xl font-bold">
                Link Veloci
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {/* PRIMA COLONNA */}
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>Chi Siamo</li>
                    <li>Contattaci</li>
                    <li>Politiche sulla Privacy</li>
                  </ul>
                </div>
                {/* SECONDA COLONNA */}
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>Chi Siamo</li>
                    <li>Contattaci</li>
                    <li>Politiche sulla Privacy</li>
                  </ul>
                </div>
              </div>
          </motion.div>

          {/* LINK SOCIAL*/}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5}}
            transition={{ 
              delay: 0.6,
              duration: 0.6
            }}
          >
            <h1 className="text-3xl font-bold">
              Seguici
            </h1>
            <div className="flex items-center gap-3">
              <FaFacebook 
                className="text-3xl hover:scale-105 duration-300"
              />
              <FaInstagram 
                className="text-3xl hover:scale-105 duration-300"
              />
              <FaTelegram 
                className="text-3xl hover:scale-105 duration-300"
              />
              <FaGoogle 
                className="text-3xl hover:scale-105 duration-300"
              />
            </div>
            <div>
              <h1 className="text-xl mb-2 font-semibold">
                Metodi di pagamento
              </h1>
              <img 
                src={Credits} 
                alt="credit cards" 
                className="w-[80%]"
              />
            </div>
          </motion.div>
        </div>
        
        {/* COPYRIGHT */}
        <p 
          className="text-white text-center mt-8 pt-8 border-t-2"
        >
          Copyright &copy; 2025 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer