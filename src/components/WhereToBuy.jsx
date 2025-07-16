/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import World from "../assets/world-map.png";

function WhereToBuy() {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* FORM */}
        <div className="space-y-8">
          <motion.h1 
            className="text-4xl font-bold text-darkGray font-serif"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
          >
            Compra i nostri prodotti da qualsiasi luogo
          </motion.h1>
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.4
              }}
          >
            <input 
              type="text" 
              placeholder="Nome"
              className="input-style w-full lg:w-[150px]"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.2
              }}
          >
            <input 
              type="text" 
              placeholder="Città"
              className="input-style w-full"
            />
            <input 
              type="text" 
              placeholder="Codice Psotale"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>

          <motion.button 
            className="primary-btn cursor-pointer w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.8
              }}
          >
            Ordina Ora
          </motion.button>

        </div>
        {/* WORLD IMAGE */}
        <div className="col-span-2">
          <motion.img 
            src={World} 
            alt="" 
            className="w-full sm:w-[500px] mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
                delay: 1,
                stiffness: 100,
                damping: 10,
                type: "spring"
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default WhereToBuy;