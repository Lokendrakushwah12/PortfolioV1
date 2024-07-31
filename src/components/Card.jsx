import React from "react";

const Card = ({ title, description, url }) => {
  return (
    <>
      <div className="relative flex h-[28rem] w-[28rem] flex-col items-start justify-start overflow-hidden rounded-xl bg-[#f2f2f2] shadow-lg xm:h-[24rem] xm:w-[24rem] md:h-[36rem] md:w-[36rem]">
        <img className="h-full w-full object-cover" src={url} alt={title} />
        <div className="absolute bottom-0 flex flex-col gap-0 p-2 text-[#eaeaea]">
          <div className="text-shadow text-2xl">{title}</div>
          <div className="text-shadow text-sm">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
