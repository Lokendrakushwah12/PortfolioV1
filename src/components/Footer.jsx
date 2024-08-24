import React, { useState } from "react";
import BlurFadeText from "./BlurFadeText";
import BlurFade from "./BlurFade";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-4 pt-24 xm:px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-[500] leading-5 text-[#212121]/70 dark:text-[#fbfbfb]/60 md:text-6xl md:leading-[2.25rem]">
            <BlurFadeText delay={0.2} text="Lokendra Kushwah" />
          </h1>
          <Link to="mailto:Lokendrakushwah8051@gmail.com" target="_blank">
            <h1 className="text-sm font-[400] leading-5 tracking-[0.75px] text-[#212121]/70 dark:text-[#fbfbfb]/40">
              <BlurFadeText delay={0.25} text="Lokendrakushwah8051@gmail.com" />
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-1 transition-all">
          <BlurFade delay={0.3}>
            <Link to="https://github.com/lokendrakushwah12" target="_blank">
              <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
                <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/60">
                  GitHub
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
            </Link>
          </BlurFade>

          <BlurFade delay={0.35}>
            <Link to="https://twitter.com/lokendratwt" target="_blank">
              <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
                <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/60">
                  Twitter
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
            </Link>
          </BlurFade>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 py-16 xm:px-2">
        <p className="text-sm font-[400] leading-5 tracking-[0.2px] text-[#212121]/70 dark:text-[#fbfbfb]/40">
          <BlurFadeText
            delay={0.3}
            text="© 2024 Lokendra Kushwah. All Rights Reserved."
          />
        </p>
        <p className="text-sm font-[400] leading-5 tracking-[0.2px] text-[#212121]/70 dark:text-[#fbfbfb]/40">
          <BlurFadeText
            delay={0.35}
            text="Last updated by Lokendra on Aug 24, 2024, 11:59 PM IST"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
