import React from 'react';

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between py-16 xm:px-2">
      <div className="flex items-center justify-center gap-2">
        <img
          className="rounded-xl"
          src="./favicon.png"
          width="48px"
          height="48px"
          alt="Lokendra Kushwah"
        />
        <div className="flex flex-col items-start justify-center">
          <div className="text-base leading-5 text-[#212121] md:text-xl md:leading-5">
            Lokendra Kushwah
          </div>
          <div className="text-sm leading-5 text-[#212121]/50 md:text-base md:leading-5">
            Frontend developer
          </div>
        </div>
      </div>
      <div className="relative flex gap-2 rounded-full p-1 transition-all hover:cursor-pointer">
        <div
          className={`absolute h-1 w-1 rounded-full ${
            activeTab === 'Info'
              ? 'left-[80%] top-[90%]'
              : 'left-[30%] top-[90%]'
          } bg-[#717171] transition-all duration-300`}
        />
        <div
          className={`cursor-pointer transition-all duration-300 ${
            activeTab === 'Projects' ? 'text-[#212121]' : 'text-[#212121]/50'
          }`}
          onClick={() => setActiveTab('Projects')}
        >
          Projects
        </div>
        <div
          className={`cursor-pointer transition-all duration-300 hover:text-[#212121] ${
            activeTab === 'Info' ? 'text-[#212121]' : 'text-[#212121]/50'
          }`}
          onClick={() => setActiveTab('Info')}
        >
          Info
        </div>
      </div>
    </div>
  );
};

export default Nav;