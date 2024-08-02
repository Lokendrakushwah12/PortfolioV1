import React from "react";
import BlurFade from "./BlurFade";

const Card = ({ title, description, tags, url }) => {
  return (
    <>
      <div className="relative flex h-[28rem] w-[28rem] flex-col items-start justify-start rounded-xl border border-[#e9e9e9] bg-[#91919110] p-1 shadow-lg dark:border-[#212121] xm:h-[24rem] xm:w-[24rem] md:h-[36rem] md:w-[36rem]">
        <img
          className="h-4/5 w-full rounded-lg object-cover"
          src={url}
          alt={title}
        />
        {/* border */}
        <div className="absolute z-10 h-0 w-full bg-gradient-to-r from-[#242424] via-[#f2f2f2] to-[#242424] dark:h-[1px]" />
        <div className="absolute z-10 block h-[1px] w-full bg-gradient-to-r from-[#f2f2f2] via-gray-500/50 to-[#f2f2f2] dark:h-0" />
        <div className="absolute bottom-[4px] z-10 h-0 w-full bg-gradient-to-r from-[#242424] via-[#f2f2f2] to-[#242424] dark:h-[1px]" />
        <div className="absolute bottom-[4px] z-10 block h-[1px] w-full bg-gradient-to-r from-[#f2f2f2] via-gray-500/50 to-[#f2f2f2] dark:h-0" />
        {/* content */}
        <div className="flex h-1/5 w-full flex-col justify-center gap-4 p-2 text-[#212121] dark:text-[#f2f2f2]">
          <div className="flex w-full items-center justify-between">
            <div className="text-2xl font-[500]">{title}</div>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-full border border-[#d9d9d9] bg-[#f2f2f2] px-2 py-1 text-xs tracking-wider dark:border-[#414141] dark:bg-[#242424]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="text-base tracking-wide text-[#212121]/70 dark:text-[#f2f2f2]/70">
            {description}
          </div>
        </div>
        <div className="absolute -bottom-12 w-full border-b-2 border-dashed border-gray-500/50"></div>
      </div>
    </>
  );
};

export default Card;
