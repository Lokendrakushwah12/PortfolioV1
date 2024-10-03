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
            className="rounded-lg select-none w-12 h-12 xm:rounded-md xm:w-8 xm:h-8"
            src="./favicon.png"
            alt="Lokendra Kushwah"
            draggable="false"
          />
        </BlurFade>
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl -mb-0.5 font-[500] xm:text-xl Instrument-Serif tracking-wide text-[#212121] dark:text-[#fbfbfb] md:text-2xl">
            <BlurFadeText text="Lokendra Kushwah" />
          </div>
          <div className="text-sm -mt-1 xm:text-[12px] tracking-tight font-[300] text-[#212121] dark:text-[#fbfbfb]/60 md:text-base">
            <BlurFadeText text="Frontend developer" />
          </div>
        </div>
      </div>
      <div className="flex">
        <BlurFade>
          <div className="relative xm:-mr-1 flex gap-2 rounded-full xm:text-sm p-1 transition-all hover:cursor-pointer">
            <div
              className={`absolute glow h-1 w-1 rounded-full ${activeTab === "Info"
                ? "left-[80%] top-[90%]"
                : "left-[30%] top-[90%]"
                } bg-[#212121] dark:bg-[#fff] transition-all duration-300`}
            />
            <div
              className={`cursor-pointer transition-all duration-300 ${activeTab === "Projects"
                ? "text-[#212121] dark:text-[#fbfbfb]"
                : "text-[#212121]/60 dark:text-[#fbfbfb]/60"
                }`}
              onClick={() => setActiveTab("Projects")}
            >
              Projects
            </div>
            <div
              className={`hover dark:text-[#fbfbfb]:text-[#212121] cursor-pointer transition-all duration-300 ${activeTab === "Info"
                ? "text-[#212121] dark:text-[#fbfbfb]"
                : "text-[#212121]/60 dark:text-[#fbfbfb]/60"
                }`}
              onClick={() => setActiveTab("Info")}
            >
              Info
            </div>
          </div>
        </BlurFade>
        <BlurFade>
          <DarkLight />
        </BlurFade>
      </div>
    </div>
  );
};

export default Nav;
