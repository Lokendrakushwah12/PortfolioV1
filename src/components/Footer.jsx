import React, { useState } from "react";
import BlurFadeText from "./BlurFadeText";
import BlurFade from "./BlurFade";
import { Link } from "react-router-dom";
import GitHub from "../assets/logo/GitHub";
import Twitter from "../assets/logo/Twitter";
import Linkedin from "../assets/logo/Linkedin";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-4 pt-24 xm:px-2">
        <h1 className="text-3xl font-[500] leading-5 Instrument-Serif text-[#212121] dark:text-[#fbfbfb]/80 md:text-6xl md:leading-[2.25rem]">
          <BlurFadeText delay={0.2} text="Lokendra Kushwah" />
        </h1>
      </div>
      <div className="flex justify-between pt-4 xm:flex-col xm:gap-4 xm:px-2">
        <ul className="col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end">
          <li className="shrink-0 first:sm:ml-auto">
            <BlurFade delay={0.25}>
              <GitHub url='https://github.com/lokendrakushwah12' />
            </BlurFade>
          </li>
          <li className="shrink-0 first:sm:ml-auto">
            <BlurFade delay={0.3}>
              <Twitter url='https://twitter.com/lokendratwt' />
            </BlurFade>
          </li>
          <li className="shrink-0 first:sm:ml-auto">
            <BlurFade delay={0.35}>
              <Linkedin url='https://www.linkedin.com/in/lokendrakushwah12/' />
            </BlurFade>
          </li>
        </ul>
        <Link to="mailto:Lokendrakushwah8051@gmail.com" target="_blank">
          <h1 className="text-sm font-[400] tracking-normal mix-blend-difference leading-5 text-[#b9b9b9] dark:text-[#8f8f8f]">
            <BlurFadeText delay={0.4} text="Lokendrakushwah8051@gmail.com" />
          </h1>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 py-16 xm:px-2">
        <p className="text-sm tracking-tight font-[300] leading-5 text-[#212121] dark:text-[#fbfbfb]/40">
          <BlurFadeText
            delay={0.45}
            text="© 2024 — Lokendra Kushwah"
          />
        </p>
        <p className="text-sm tracking-tight font-[300] mix-blend-difference leading-5 text-[#b9b9b9] dark:text-[#8f8f8f]">
          <BlurFadeText
            delay={0.5}
            text="Last updated by Lokendra on Oct 08, 2024, 03:29 AM IST"
          />
        </p>
      </div>
      <BlurFade delay={0.3} className="-z-30">
        <div className="absolute select-none h-60 bottom-28 right-4 md:-right-20 -z-10">
          <img src="./art.png" alt="Lokendra Kushwah" loading="lazy" className=" h-[300px]" />
        </div>
      </BlurFade>
    </div>
  );
};

export default Footer;
