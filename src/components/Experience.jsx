import React from "react";
import { Link } from "react-router-dom";

const Experience = ({ href, title, subtitle, date }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <Link
          to={href}
          target="_blank"
          className="sm:gap-4 flex items-center gap-2"
        >
          <strong className="text-gray-1000 line-clamp-2 font-[400] dark:text-[#f2f2f2]">
            {title}
          </strong>
          {subtitle && (
            <span className="flex-none text-[14px] font-[400] text-[#212121]/60 dark:text-[#f2f2f2]/60">
              — {subtitle}
            </span>
          )}
        </Link>
        {date && (
          <span className="flex-none font-mono font-[400]  text-[#212121]/60 dark:text-[#f2f2f2]/60">
            {date}
          </span>
        )}
      </div>
      <span className="flex w-full flex-1 shrink border-t border-dashed  border-gray-800 dark:border-[#f2f2f2]/30" />
    </div>
  );
};

export default Experience;
