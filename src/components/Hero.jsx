import React from "react";
import { Link } from "react-router-dom";

const Hero = ({headline}) => {
  return (
    <>
      <div className="flex h-full w-full items-start justify-center pb-16 xm:px-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-[400] text-[#212121]/50">{headline}</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
