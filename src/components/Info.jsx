import React from "react";
import Loader from "./Loader";
import BlurFade from "./BlurFade";

const Info = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 xm:px-4 dark:text-[#f2f2f2]/80">
      <BlurFade charachterDelay={0.1}>
        <h1 className="text-[1.75rem] leading-[2.25rem] xm:text-[1.5rem] xm:leading-[1.95rem] md:text-[2.5rem] md:leading-[3rem]">
          <span className="rounded-sm bg-[hsl(115,85%,85%)] px-1 font-[400] text-[hsl(115,99%,35%)] dark:bg-[hsla(114,84%,85%,0.1)]">
            Frontend developer
          </span>
          with a knack <br />
          for crafting intuitive
          <span className="instrument-serif-regular-italic">
            &nbsp;design tools&nbsp;
          </span>
          & <br />
          seamless
          <span className="instrument-serif-regular-italic">
            &nbsp;Experiences.
          </span>
        </h1>
      </BlurFade>
      <div className="flex gap-4 p-1 transition-all">
      <BlurFade delay={0.2}>
        <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/50">
          <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/50">
            Resume
          </h4>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#212121] dark:stroke-[#fbfbfb]"
          >
            <path
              d="M0 0.5H10M10 0.5V10.5M10 0.5L0.555556 9.94444"
              strokeOpacity="0.5"
            />
          </svg>
        </div>
      </BlurFade>
      <BlurFade delay={0.3}>
        <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/50">
          <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/50">
            Medium
          </h4>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#212121] dark:stroke-[#fbfbfb]"
          >
            <path
              d="M0 0.5H10M10 0.5V10.5M10 0.5L0.555556 9.94444"
              strokeOpacity="0.5"
            />
          </svg>
        </div>
      </BlurFade>
      </div>
    </div>
  );
};

export default Info;
