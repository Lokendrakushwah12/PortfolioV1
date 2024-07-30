import React from 'react'

const Card = ({ title, description, url }) => {
  const maskStyle = {
    maskImage: 'linear-gradient(to top, white 0%, transparent 50%)',
    WebkitMaskImage: 'linear-gradient(to top, white 0%, transparent 50%)',
    zIndex: '20',
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: '0',
    backdropFilter: 'blur(6px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add a semi-transparent background
  }

  return (
    <>
      <div className="relative xm:w-[23rem] xm:h-[15rem] w-[28rem] h-[18rem] md:w-[36rem] md:h-[28rem] overflow-hidden flex flex-col items-start justify-start bg-[#f2f2f2]">
        <img className="w-full h-full object-cover" src={url} alt={title} />
        <div style={maskStyle} />
        <div className="flex z-40 absolute bottom-0 text-[#eaeaea] flex-col gap-2 p-2">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </>
  )
}

export default Card
