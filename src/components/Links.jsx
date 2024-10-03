import React from 'react'
import { Link } from 'react-router-dom'
import BlurFade from './BlurFade'

export const Links = () => {
  return (
    <div className="flex gap-4 p-1 transition-all">
        <BlurFade delay={0.2}>
          <Link
            to="https://drive.google.com/file/d/1cpwikVxs_HJWFbCnSRsx6SbS6XKEzu0g/view?usp=drive_link"
            target="_blank"
          >
            <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
              <h4 className="text-base font-[400] text-[#212121] dark:text-[#fbfbfb]/60">
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
        <BlurFade delay={0.25}>
          <Link to="https://medium.com/@lokendrakushwah" target="_blank">
            <div className="flex h-5 items-center justify-center gap-1 border-b border-[#fbfbfb] hover:cursor-pointer hover:border-[#212121]/30 dark:border-[#101010] dark:hover:border-[#fbfbfb]/60">
              <h4 className="text-base font-[400] text-[#212121] dark:text-[#fbfbfb]/60">
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
  )
}
