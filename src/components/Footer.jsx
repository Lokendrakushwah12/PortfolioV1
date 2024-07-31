import React, { useState } from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-4 pt-24 xm:px-2">
        <h1 className="md:text-6xl font-[400] text-[#212121] leading-5 md:leading-5 text-3xl">
          Lokendra Kushwah
        </h1>
        <div className="flex flex-col gap-2 p-1  transition-all">
          <div className="flex justify-center hover:cursor-pointer items-center border-b border-[#fbfbfb] hover:border-[#212121]/30 h-5 gap-1">
            <h4 className="text-[#212121]/50 font-[400] text-base">GitHub</h4>
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
          <div className="flex justify-center hover:cursor-pointer items-center border-b border-[#fbfbfb] hover:border-[#212121]/30 h-5 gap-1">
            <h4 className="text-[#212121]/50 font-[400] text-base">Twitter</h4>
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
      <div className="flex  flex-wrap gap-2 justify-between items-center py-16 xm:px-2">
        <p className="font-[400] text-[#212121]/50 leading-5 tracking-[0.2px] text-sm">
          © 2024 Lokendra Kushwah. All Rights Reserved.
        </p>
        <p className="font-[400] text-[#212121]/50 leading-5 tracking-[0.2px] text-sm">
          Last updated by Lokendra on July 31, 2024, 05:45 AM IST
        </p>
      </div>
    </div>
  )
}

export default Footer
