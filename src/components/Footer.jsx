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
        <h1 className="text-3xl font-[500] leading-5 InterVariable text-[#212121]/70 dark:text-[#fbfbfb]/80 md:text-6xl md:leading-[2.25rem]">
          <BlurFadeText delay={0.2} text="Lokendra Kushwah" />
        </h1>
      </div>
      <div className="flex justify-between pt-4">
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
          <h1 className="text-sm font-[400] leading-5 tracking-normal text-[#212121]/70 dark:text-[#fbfbfb]/40">
            <BlurFadeText delay={0.4} text="Lokendrakushwah8051@gmail.com" />
          </h1>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 py-16 xm:px-2">
        <p className="text-sm tracking-tight font-[300] leading-5 text-[#212121]/70 dark:text-[#fbfbfb]/40">
          <BlurFadeText
            delay={0.45}
            text="© 2024 — Lokendra Kushwah"
          />
        </p>
        <p className="text-sm tracking-tight font-[300] leading-5 text-[#212121]/70 dark:text-[#fbfbfb]/40">
          <BlurFadeText
            delay={0.5}
            text="Last updated by Lokendra on Sep 03, 2024, 01:59 AM IST"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
