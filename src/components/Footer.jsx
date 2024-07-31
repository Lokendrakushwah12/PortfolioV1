import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-4 pt-24 xm:px-2">
        <h1 className="text-3xl font-[500] leading-5 text-[#212121]/50 md:text-6xl md:leading-5">
          Lokendra Kushwah
        </h1>
        <div className="flex flex-col gap-2 p-1 transition-all">
          <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30">
            <h4 className="text-base font-[400] text-[#212121]/50">GitHub</h4>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.5H10M10 0.5V10.5M10 0.5L0.555556 9.94444"
                stroke="#212121"
                stroke-opacity="0.5"
              />
            </svg>
          </div>
          <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30">
            <h4 className="text-base font-[400] text-[#212121]/50">Twitter</h4>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.5H10M10 0.5V10.5M10 0.5L0.555556 9.94444"
                stroke="#212121"
                stroke-opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 py-16 xm:px-2">
        <p className="text-sm font-[400] leading-5 tracking-[0.2px] text-[#212121]/50">
          © 2024 Lokendra Kushwah. All Rights Reserved.
        </p>
        <p className="text-sm font-[400] leading-5 tracking-[0.2px] text-[#212121]/50">
          Last updated by Lokendra on July 31, 2024, 05:45 AM IST
        </p>
      </div>
    </div>
  );
};

export default Footer;
