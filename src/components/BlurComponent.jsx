import React from "react";

const BlurComponent = () => {
  const maskImage = {
    1: {
      maskImage: "linear-gradient(to bottom, transparent 0%, white 20%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 20%)",
    },
    2: {
      maskImage: "linear-gradient(to bottom, transparent 10%, white 30%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, white 30%)",
    },
    3: {
      maskImage: "linear-gradient(to bottom, transparent 20%, white 40%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, white 40%)",
    },
    4: {
      maskImage: "linear-gradient(to bottom, transparent 30%, white 50%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 30%, white 50%)",
    },
    5: {
      maskImage: "linear-gradient(to bottom, transparent 40%, white 60%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, white 60%)",
    },
    6: {
      maskImage: "linear-gradient(to bottom, transparent 50%, white 70%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 50%, white 70%)",
    },
    7: {
      maskImage: "linear-gradient(to bottom, transparent 60%, white 80%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 60%, white 80%)",
    },
    8: {
      maskImage: "linear-gradient(to bottom, transparent 70%, white 90%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 70%, white 90%)",
    },
    9: {
      maskImage: "linear-gradient(to bottom, transparent 80%, white 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 80%, white 100%)",
    },
    10: {
      maskImage: "linear-gradient(to bottom, transparent 90%, white 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 90%, white 100%)",
    },
  };

  return (
    <div className="fixed bottom-0 z-[40] mx-auto flex w-[200%] items-center justify-center">
      <div className="relative h-[96px] w-full -translate-x-[25%] overflow-visible rounded-none">
        <div
          className="absolute inset-0 z-10 h-full w-full rounded-none backdrop-blur-none"
          style={maskImage[1]}
        ></div>
        <div
          className="absolute inset-0 z-20 h-full w-full rounded-none backdrop-blur-sm"
          style={maskImage[2]}
        ></div>
        <div
          className="absolute inset-0 z-30 h-full w-full rounded-none backdrop-blur-md"
          style={maskImage[3]}
        ></div>
        <div
          className="absolute inset-0 z-40 h-full w-full rounded-none backdrop-blur-lg"
          style={maskImage[4]}
        ></div>
        <div
          className="absolute inset-0 z-50 h-full w-full rounded-none backdrop-blur-xl"
          style={maskImage[5]}
        ></div>
        <div
          className="z-60 absolute inset-0 h-full w-full rounded-none backdrop-blur-2xl"
          style={maskImage[6]}
        ></div>
        <div
          className="z-70 absolute inset-0 h-full w-full rounded-none backdrop-blur-3xl"
          style={maskImage[7]}
        ></div>
        <div
          className="z-80 absolute inset-0 h-full w-full rounded-none backdrop-blur-4xl"
          style={maskImage[8]}
        ></div>
        <div
          className="z-90 absolute inset-0 h-full w-full rounded-none backdrop-blur-5xl"
          style={maskImage[9]}
        ></div>
        <div
          className="z-100 absolute inset-0 h-full w-full rounded-none backdrop-blur-6xl"
          style={maskImage[10]}
        ></div>
      </div>
    </div>
  );
};

export default BlurComponent;
