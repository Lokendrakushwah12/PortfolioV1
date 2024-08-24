import React from "react";

const Experience = ({ href, title, subtitle, date }) => {
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      className="sm:gap-4 group flex w-full items-center gap-2"
    >
      <strong className="text-gray-1000 line-clamp-2 font-medium group-hover:text-[#1ab6ff] group-hover:underline dark:text-[#f2f2f2] dark:group-hover:text-[#1ab6ff]">
        {title}
      </strong>
      <span className="flex w-full flex-1 shrink border-t border-dashed border-gray-800 dark:border-gray-300" />
      {subtitle && (
        <span className="flex-none font-[400] text-[#f2f2f2]/60">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="flex-none font-mono font-[400] text-[#f2f2f2]/30">
          {date}
        </span>
      )}
    </a>
  );
};

export default Experience;
