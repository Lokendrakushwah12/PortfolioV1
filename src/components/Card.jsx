import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Card = ({ title, description, tags, url, github }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="relative flex aspect-auto w-[28rem] flex-col items-start justify-start overflow-x-hidden rounded-lg border border-[#e9e9e9] bg-[#91919110] shadow-lg dark:border-[#212121] xm:w-full md:w-[36rem]">
        <img
          className="h-[24rem] w-full select-none object-cover xm:h-[15rem]"
          style={{ backgroundPosition: "top" }}
          src={url}
          alt={title}
          draggable="false"
        />
        {/* border */}
        <div className="absolute z-10 h-0 w-full bg-gradient-to-r from-[#242424] via-[#f2f2f2] to-[#242424] dark:h-[1px]" />
        <div className="absolute z-10 block h-[1px] w-full bg-gradient-to-r from-[#f2f2f2] via-gray-500/50 to-[#f2f2f2] dark:h-0" />
        <div className="absolute bottom-[0px] z-10 h-0 w-full bg-gradient-to-r from-[#242424] via-[#f2f2f2] to-[#242424] dark:h-[1px]" />
        <div className="absolute bottom-[0px] z-10 block h-[1px] w-full bg-gradient-to-r from-[#f2f2f2] via-gray-500/50 to-[#f2f2f2] dark:h-0" />
        {/* content */}
        <div className="flex h-1/5 w-full flex-col justify-center gap-1 p-2 text-[#212121] dark:text-[#f2f2f2] md:gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-2 text-2xl font-[500]">
              {title}{" "}
              <Link to={github} target="_blank">
                <svg
                  className="hover:opacity-90"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={darkMode ? "#f2f2f2" : "#212121"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" />
                </svg>
              </Link>
            </div>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-md border border-[#d9d9d9] bg-[#f2f2f2] px-2 py-1 text-xs tracking-wider dark:border-[#414141] dark:bg-[#242424]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="text-base tracking-wide text-[#212121]/70 dark:text-[#f2f2f2]/50">
            {description}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-28 w-full border-b-2 border-dashed border-gray-500/50"></div>
    </>
  );
};

export default Card;
