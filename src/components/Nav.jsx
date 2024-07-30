import React, { useState } from "react";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="flex justify-between items-center py-16 xm:px-2">
      <div className="flex justify-center items-center gap-2">
        <img
          className="rounded-xl"
          src="./favicon.png"
          width="48px"
          height="48px"
          alt="Lokendra Kushwah"
        />
        <div className="flex flex-col justify-center items-start">
          <div className="md:text-xl text-[#212121] leading-5 md:leading-5 text-base">
            Lokendra Kushwah
          </div>
          <div className="md:text-base leading-5 md:leading-5 text-sm text-[#212121]/50">
            Frontend developer
          </div>
        </div>
      </div>
      <div className="flex relative rounded-full gap-2 p-1 hover:cursor-pointer transition-all">
        <div
          className={`absolute w-1 h-1 rounded-full ${
            activeTab === "Info"
              ? "top-[90%] left-[80%]"
              : "top-[90%] left-[30%]"
          } bg-[#717171] transition-all duration-300`}
        />
        <div
          className={`transition-all duration-300 ${
            activeTab === "Projects" ? "text-[#212121]" : "text-[#212121]/50"
          }`}
          onClick={() => setActiveTab("Projects")}
        >
          Projects
        </div>
        <div
          className={` hover:text-[#212121] transition-all  duration-300 ${
            activeTab === "Info" ? "text-[#212121]" : "text-[#212121]/50"
          }`}
          onClick={() => setActiveTab("Info")}
        >
          Info
        </div>
      </div>
    </div>
  );
};

export default Nav;
