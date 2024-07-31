import React from "react";

const Loader = () => {
  return (
    <div className="flex h-[30vh] items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-[#919191]/50"></div>
        <div className="animation-delay-300 h-2 w-2 animate-bounce rounded-full bg-[#919191]/50"></div>
        <div className="animation-delay-600 h-2 w-2 animate-bounce rounded-full bg-[#919191]/50"></div>
      </div>
    </div>
  );
};

export default Loader;
