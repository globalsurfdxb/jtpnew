import React from 'react'
import {motion} from 'framer-motion'

const MarqueeText = () => {
  return (
    <div className="w-full overflow-hidden flex items-center relative before:content-[''] before:absolute before:bg-gradient-to-r before:h-full before:z-10 before:w-[50%]  before:from-black  before:to-transparent after:content-[''] after:absolute after:bg-gradient-to-l after:h-full after:z-10 after:w-[50%]  after:from-black  after:to-transparent after:right-0 before:opacity-80 after:opacity-80">
      <motion.div
        className="flex min-w-max space-x-10"
        animate={{ x: ["0%", "-100%"] }} // Moves seamlessly
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }} // Increased duration for slower speed
      >
    {[...Array(10)].map((_, i) => (
         /*  <motion.h1
          key={i}
            className="text-[300px] font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 whitespace-nowrap leading-none"
          > */
          <motion.h1
          key={i}
            className="text-[300px] font-light text-white "
          >
                
         JT & Partners
        
          </motion.h1>
       ))}
      </motion.div>
    </div>
  )
}

export default MarqueeText