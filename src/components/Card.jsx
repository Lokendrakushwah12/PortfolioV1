import React from 'react'

const Card = ({ title, description, url }) => {
    return (
        <>
            <div className='xm:w-[23rem] xm:h-[15rem] w-[28rem] h-[18rem] md:w-[36rem] p-1 md:h-[24rem] overflow-hidden flex flex-col items-start justify-start bg-[#f5f5f4] shadow-md rounded-xl border shadow-[rgba(0,0,0,0.04)]'>
                <h1 className='px-1 pt-1 md:text-2xl font-[400] leading-5 md:leading-6 text-base'>{title}</h1>
                <h4 className='px-1 md:text-base font-[400] leading-5 md:leading-6 text-sm text-[rgba(36,39,41,0.6)]'>{description}</h4>
                <div className="h-full overflow-hidden w-full">
                    <img className='w-full h-full object-cover bg-[#fafaf9] rounded-lg' src={url} />
                </div>
            </div>

        </>
    )
}

export default Card
