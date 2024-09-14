import React from "react";
import BlurFadeText from "./BlurFadeText";
const Hero = ({ headline }) => {
  return (
    <>
      <div className="flex h-full w-full items-start justify-start pb-4 xm:px-2">
        <h1 className="font-[400] text-[#212121]/30 text-3xl dark:text-[#fbfbfb]/30">
          <BlurFadeText delay={0.1} text={headline} />
        </h1>
      </div>
    </>
  );
};

export default Hero;
