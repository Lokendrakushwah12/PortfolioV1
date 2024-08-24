import React from "react";
import DarkLight from "./DarkLight";
import BlurFadeText from "./BlurFadeText";
import BlurFade from "./BlurFade";

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between py-16 xm:px-2">
      <div className="flex items-center justify-center gap-2">
        <BlurFade>
          <img
            className="rounded-xl select-none"
            src="./favicon.png"
            width="48px"
            height="48px"
            alt="Lokendra Kushwah"
            draggable="false"
          />
        </BlurFade>
        <div className="flex flex-col items-start justify-center">
          <div className="text-base font-[500] leading-5 tracking-wide text-[#212121] dark:text-[#fbfbfb] md:text-xl md:leading-5">
            <BlurFadeText text="Lokendra Kushwah" />
          </div>
          <div className="text-sm leading-5 tracking-wide font-[300] text-[#212121]/70 dark:text-[#fbfbfb]/60 md:text-base md:leading-5">
            <BlurFadeText text="Frontend developer" />
          </div>
        </div>
      </div>
      <div className="flex">
        <BlurFade>
          <div className="relative flex gap-2 rounded-full p-1 transition-all hover:cursor-pointer">
            <div
              className={`absolute h-1 w-1 rounded-full ${
                activeTab === "Info"
                  ? "left-[80%] top-[90%]"
                  : "left-[30%] top-[90%]"
              } bg-[#1ab6ff] transition-all duration-300`}
            />
            <div
              className={`cursor-pointer transition-all duration-300 ${
                activeTab === "Projects"
                  ? "text-[#212121] dark:text-[#fbfbfb]"
                  : "text-[#212121]/70 dark:text-[#fbfbfb]/60"
              }`}
              onClick={() => setActiveTab("Projects")}
            >
              Projects
            </div>
            <div
              className={`hover dark:text-[#fbfbfb]:text-[#212121] cursor-pointer transition-all duration-300 ${
                activeTab === "Info"
                  ? "text-[#212121] dark:text-[#fbfbfb]"
                  : "text-[#212121]/70 dark:text-[#fbfbfb]/60"
              }`}
              onClick={() => setActiveTab("Info")}
            >
              Info
            </div>
          </div>
        </BlurFade>
        {/* <BlurFade>
          <DarkLight />
        </BlurFade> */}
      </div>
    </div>
  );
};

export default Nav;
