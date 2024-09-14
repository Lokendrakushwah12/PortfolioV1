import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlurFade from "./BlurFade";

const TrackBar = ({ projectName, link, logo: Logo }) => {
  const [displayedProjectName, setDisplayedProjectName] = useState(projectName);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setBlur(true);
    const timeout = setTimeout(() => {
      setDisplayedProjectName(projectName);
      setBlur(false);
    }, 200); // Duration of the blur transition

    return () => clearTimeout(timeout);
  }, [projectName]);

  return (
    <div
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 100 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      className="group fixed bottom-8 z-50 flex cursor-pointer items-center justify-center transition-all duration-300"
    >
      <Link to={link} target="_blank">
        <BlurFade className="h-full w-full shadow-md rounded-full backdrop-blur-[12px]">
          <div className="no-scrollbar relative flex items-center justify-center gap-4 overflow-auto rounded-full p-2 transition-all duration-300">
            <div
              className={`z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[#212121] bg-[#ffffff]/10 p-[6px] transition-all duration-500 group-hover:brightness-150 ${blur ? "opacity-0 blur-[8px]" : "opacity-100 blur-0"}`}
            >
              {Logo}
            </div>
            <h1
              className={`relative min-w-max text-base font-[400] text-[#eaeaea] transition-all duration-500 ${blur ? "opacity-0 blur-[8px]" : "opacity-100 blur-0"}`}
            >
              {displayedProjectName}
            </h1>
            <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.41906 5.86688L10.1881 5.86688L10.1881 10.6359" stroke="#F0F0F0" stroke-width="0.833333" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M5.67044 10.3845L9.99165 6.06325" stroke="#F0F0F0" stroke-width="0.833333" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round" />
            </svg>

            <div className="absolute -top-4 z-50 h-1/4 w-3/4 rounded-full bg-white/30 blur-[24px] transition-all duration-300 group-hover:bg-white/40"></div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 flex size-full h-full w-full items-center justify-center"
            layoutId="underline"
            transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
          >
            <span className="-z-10 flex h-full w-full items-center justify-center gap-4 rounded-full border border-[#ffffff1d] bg-[#000000e9] p-2 backdrop-blur-[12px] transition-all duration-300"></span>
          </motion.div>
        </BlurFade>
      </Link>
    </div>
  );
};

export default TrackBar;
