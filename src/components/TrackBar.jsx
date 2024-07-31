import React, { useEffect, useState } from 'react'
import Cauldron from '../assets/logo/Cauldron'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TrackBar = ({ projectName, link }) => {
  const [displayedProjectName, setDisplayedProjectName] = useState(projectName)
  const [blur, setBlur] = useState(false)

  useEffect(() => {
    setBlur(true)
    const timeout = setTimeout(() => {
      setDisplayedProjectName(projectName)
      setBlur(false)
    }, 200) // Duration of the blur transition

    return () => clearTimeout(timeout)
  }, [projectName])

  return (
    <motion.div
      // key={projectName}
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 100 }}
      layout
      transition={{ type: 'spring', duration: 0.02, bounce: 0.2 }}
      className="flex z-50 cursor-pointer hover:brightness-125 transition-all duration-300 fixed bottom-8 justify-center items-center"
    >
      <Link
        to={link}
        target="_blank"
        className="flex transition-all duration-300 justify-center gap-4 p-2 items-center bg-[#121212] rounded-full border border-[#ffffff1d]"
      >
        <div className="bg-white/20 w-3/4 z-20 h-1/4 rounded-full bottom-0 absolute blur-[12px]"></div>
        <div className="bg-[#ffffff]/10 z-30 w-8 h-8 p-1 justify-center items-center flex rounded-full">
          <Cauldron />
        </div>
        <h1
          className={`text-base font-[400] min-w-max text-[#eaeaea] transition-all duration-500 ${blur ? 'blur-[8px] opacity-0' : 'blur-0 opacity-100'}`}
        >
          {displayedProjectName}
        </h1>
        <svg
          className="mr-2"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H12M12 1V13M12 1L0.666667 12.3333"
            stroke="white"
            stroke-opacity="0.5"
            stroke-width="1.4"
          />
        </svg>
      </Link>
    </motion.div>
  )
}

export default TrackBar
