import React, { useEffect, useState } from 'react'
import Cauldron from '../assets/logo/Cauldron'

const TrackBar = ({ projectName }) => {
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
    <div className="flex z-50 shadow-md fixed bottom-12 justify-center gap-4 p-2 items-center bg-[#212121] rounded-full border border-[#ffffff2c]">
      <div className="bg-[#ffffff]/10 w-8 h-8 p-1 justify-center items-center flex rounded-full">
        <Cauldron />
      </div>
      <h1
        className={`text-base font-[400] pr-4 text-[#eaeaea] transition duration-500 ${blur ? 'blur-[8px] opacity-0' : 'blur-0 opacity-100'}`}
      >
        {displayedProjectName}
      </h1>
    </div>
  )
}

export default TrackBar
