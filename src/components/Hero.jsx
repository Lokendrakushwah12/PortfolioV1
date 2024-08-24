import React from "react";
import BlurFadeText from "./BlurFadeText";
const Hero = ({ headline }) => {
  return (
    <>
      <div className="flex h-full w-full items-start justify-center pb-16 xm:px-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/60">
           <BlurFadeText delay={0.1} text={headline}/>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
