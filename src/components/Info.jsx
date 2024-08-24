import React from "react";
import Loader from "./Loader";
import BlurFade from "./BlurFade";
import { Link } from "react-router-dom";
import Experience from "./Experience";

const workHistory = [
  {
    href: "https://www.snipeit.ai/",
    title: "Snipe",
    subtitle: "UI/UX Intern",
    date: "Aug 2024 — ",
  },
];

const Info = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 dark:text-[#f2f2f2]/80 xm:px-4">
      <BlurFade charachterDelay={0.1}>
        <h1 className="text-[1.75rem] leading-[2.25rem] xm:text-[1.5rem] xm:leading-[1.95rem] md:text-[2.5rem] md:leading-[2.99rem]">
          <span className="rounded-sm bg-[#1ab6ffa0] font-[400] text-[#1ab6ff] dark:bg-[hsla(114,84%,85%,0.1)]">
            Frontend developer
          </span>
          &nbsp;passionate about building intuitive
          <span className="instrument-serif-regular-italic text-[#f2f2f2]">
            &nbsp;software & seamless
          </span>
          &nbsp;user experiences.
        </h1>
      </BlurFade>
      <div className="flex gap-4 p-1 transition-all">
        <BlurFade delay={0.2}>
          <Link
            to="https://drive.google.com/file/d/1cpwikVxs_HJWFbCnSRsx6SbS6XKEzu0g/view?usp=drive_link"
            target="_blank"
          >
            <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
              <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/60">
                Resume
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
        <BlurFade delay={0.3}>
          <Link to="https://medium.com/@lokendrakushwah" target="_blank">
            <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
              <h4 className="text-base font-[400] text-[#212121]/70 dark:text-[#fbfbfb]/60">
                Medium
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
      <h3 className="text-[20px] font-[400]">Experience</h3>
      <div className="px-2 w-full">
        {workHistory.map((job) => (
          <Experience
            href={job.href}
            title={job.title}
            subtitle={job.subtitle}
            date={job.date}
            key={job.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
