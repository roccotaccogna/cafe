/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import bannerImg from "../assets/coffee-cover.jpg";
import AppleStore from "../assets/website/app_store.png";
import PlayStore from "../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%"
};

function AppBanner() {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:mih-h-[400px] sm:flex sm:justify-end
                   sm:items-center rounded-xl 
                   xl:min-h-[600px] lg:min-h-[400px]
                   md:min-h-[350px] min-h-[350px]"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1 
              className="text-2xl text-center sm:text-4xl font-semibold"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
            > 
              Scarica l'app 
            </motion.h1>
            <motion.p 
              className="text-center sm:px-20"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3
              }}
            > 
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Maxime suscipit libero hic?
            </motion.p>

            <div 
              className="flex justify-center items-center gap-4"
            >
              <a href="">
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4
                  }}
                  src={AppleStore} 
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" 
                />
              </a>
              <a href="">
                <motion.img 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5
                  }}
                  src={PlayStore} 
                  alt="" 
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" 
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppBanner;