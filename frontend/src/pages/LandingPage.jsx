import React from 'react'
// import { IoSearchOutline } from "react-icons/io5";
// import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
    const navigate = useNavigate();
  // Typewriter effect using keyframes animation
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.01,
        staggerChildren: 0.2, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    
<div className="w-full min-h-screen flex flex-col ">
        {/* <div className="w-full h-[50px] border-b-2 border-black flex justify-between items-center">
        <div className="w-3/4 flex justify-start items-center">
          <h1 className="font-semibold text-2xl p-2">STYLHER</h1>
        </div>

        <div className="w-1/4 flex justify-end items-center gap-5">
          <IoSearchOutline className="text-2xl cursor-pointer" />
          <PiShoppingCartSimpleThin className="text-2xl cursor-pointer" />
          <MdAccountCircle className="text-2xl cursor-pointer" />
        </div>
      </div>   */}

      {/* initial={{ opacity: 0 }} & animate={{ opacity: 1 }}: The background fades in smoothly when the page loads. */}

      <motion.div
        className="absolute top-0 left-0 bg-[url('bg.jpg')] w-full h-screen bg-center bg-cover flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-10"></div>

        {/* Text Section */}
        <div className="relative z-10 text-white flex flex-col items-center gap-2">
          {/* Static "Welcome to" */}
          <h1 className="text-4xl mb-2">Welcome to</h1>

          {/* Animated "FASHION" */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-8xl font-bold flex"
          >
            {"FLAVORIZ".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <div className=" w-full h-[50px]  outline-none hover:scale-105 transition ease-in-out rounded-lg p-10 ">
          {/* <p className="text-xl md:text-xl font-semibold text-neutral-50 italic text-center">Style That Speaks for Her🎀</p> */}
          {/* <p className="text-sm md:text-lg font-normal text-neutral-50 text-center">Discover the latest in trendy western wear, designed to make every woman feel confident and stylish.</p> */}
          </div>
        </div>

        {/* Login and signup section */}
        <div className="w-full absolute bottom-6  flex items-center justify-center gap-6">
          <button
            onClick={() => navigate("/home")}
            className="px-10 py-4 bg-amber-600 border text-white rounded-lg hover:scale-105 transition ease-in-out hover:text-black hover:bg-white hover:border-black"
          >
            Explore Now ✨
          </button>
        </div>
        <div className="w-full absolute top-2 right-4  flex items-center justify-end gap-4">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 bg-[#FF9B17] text-white rounded-lg  hover:scale-105 transition ease-in-out"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-white text-black  rounded-lg hover:scale-105 transition ease-in-out"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>

  )
}

export default LandingPage