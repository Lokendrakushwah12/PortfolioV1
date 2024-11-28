import React from "react";
import { Link } from "react-router-dom";

const Experience = ({ href, title, subtitle, date }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Link
        to={href}
        target="_blank"
        className="flex w-full items-center justify-center gap-2"
      >
        <div className="flex items-center justify-center gap-1">
          <strong className="text-gray-1000 line-clamp-2 font-[400] text-[#212121] dark:text-[#f2f2f2]">
            {subtitle},
          </strong>
          <span className="flex-none font-[400] text-[#212121]/60 dark:text-[#f2f2f2]/60">
            {title}
          </span>
        </div>
        <span className="flex w-full flex-1 shrink border-t border-dashed border-gray-800 dark:border-[#f2f2f2]/30" />
        <span className="flex-none text-sm font-[400] text-[#212121]/60 dark:text-[#f2f2f2]/60">
          {date}
        </span>
      </Link>
    </div>
  );
};

export default Experience;
