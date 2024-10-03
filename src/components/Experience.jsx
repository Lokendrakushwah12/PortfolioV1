import React from "react";
import { Link } from "react-router-dom";

const Experience = ({ href, title, subtitle, date }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <Link
          to={href}
          target="_blank"
          className="sm:gap-4 flex flex-col items-start"
        >
          <span className="flex-none Instrument-Serif text-3xl font-[400] text-[#212121] dark:text-[#f2f2f2]">
            {title}
          </span>
        </Link>
        <div className="flex w-full justify-between">
          <strong className="text-gray-1000 line-clamp-2 font-[400] text-[#212121]/60 dark:text-[#f2f2f2]/60">
            {subtitle}
          </strong>
          <span className="flex-none text-sm font-[400] text-[#212121]/60 dark:text-[#f2f2f2]/60">
            {date}
          </span>
        </div>
      </div>
      <span className="flex w-full flex-1 shrink border-t border-dashed  border-gray-800 dark:border-[#f2f2f2]/30" />
    </div>
  );
};

export default Experience;
