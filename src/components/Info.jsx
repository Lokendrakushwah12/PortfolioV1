import React from "react";
import Loader from "./Loader";
import BlurFade from "./BlurFade";
import { Link } from "react-router-dom";
import Experience from "./Experience";
import { Links } from "./Links";
import BlurFadeText from "./BlurFadeText";

const workHistory = [
  {
    href: "https://www.snipeit.ai/",
    title: "Snipe",
    subtitle: "UI/UX Intern",
    date: "Aug 2024 — Present",
  },
];

const Info = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 dark:text-[#f2f2f2]/80 xm:px-4">
      <BlurFade charachterDelay={0.1}>
        <h1 className="leading-[150%] text-[#212121]/60 dark:text-[#f2f2f2]/60 text-[1rem] md:text-[1.25rem]">
          <span className="rounded-sm bg-[#777] font-[400] text-[#212121]/80 dark:text-[#f2f2f2]/80 bg-[rgba(217,217,217,0.5)] dark:bg-[rgba(64,64,64,0.5)]">
            Frontend developer
          </span>
          &nbsp;passionate about building intuitive&nbsp;
          <span className=" dark:text-[#f2f2f2]/80 text-[#212121]/80  bg-[rgba(217,217,217,0.5)] dark:bg-[rgba(64,64,64,0.5)]">
            software & seamless
          </span>
          &nbsp;user experiences.
        </h1>
      </BlurFade>
      {/* <Links/> */}
      <div className="flex w-full flex-col gap-2 py-12">
        <h1 className="font-[400] text-[#212121]/30 text-3xl dark:text-[#fbfbfb]/30">
          <BlurFadeText delay={0.3} text="Experience" />
        </h1>

        <div className="flex w-full flex-col gap-2 px-2">
          <BlurFade delay={0.35}>
            {workHistory.map((job) => (
              <Experience
                href={job.href}
                title={job.title}
                subtitle={job.subtitle}
                date={job.date}
                key={job.href}
              />
            ))}
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Info;
