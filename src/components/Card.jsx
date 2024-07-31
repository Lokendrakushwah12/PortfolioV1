import React from 'react'

const Card = ({ title, description, url }) => {
    
  return (
    <>
      <div className="relative xm:w-[23rem] xm:h-[20rem] w-[28rem] h-[24rem] md:w-[36rem] md:h-[32rem] overflow-hidden flex flex-col items-start justify-start bg-[#f2f2f2]">
        <img className="w-full h-full object-cover" src={url} alt={title} />
        <div className="flex absolute bottom-0 text-[#eaeaea] flex-col gap-0 p-2">
          <div className="text-2xl text-shadow">{title}</div>
          <div className="text-sm text-shadow">{description}</div>
        </div>
      </div>
    </>
  )
}

export default Card
