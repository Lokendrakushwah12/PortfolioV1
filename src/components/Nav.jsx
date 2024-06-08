import React from 'react'

const Nav = () => {
    return (
        <>
            <div class="flex justify-between items-center py-16 xm:px-2">
                <div className="flex justify-center items-center gap-2">
                    <img className='shadow rounded-xl border shadow-[rgba(0,0,0,0.08)]' src="./favicon.png" width="44px" height="44px" alt="Lokendra Kushwah" />
                    <div className="flex flex-col justify-center items-start">
                        <div class="md:text-xl leading-5 md:leading-5 text-base">Lokendra Kushwah</div>
                        <div class="md:text-base leading-5 md:leading-5 text-sm text-[rgba(36,39,41,0.6)]">Frontend developer</div>
                    </div>
                </div>
                <div class="flex bg-[#f5f5f4] rounded-full p-1 hover:cursor-pointer transition-all shadow shadow-[rgba(0,0,0,0.08)]">
                    <div class="py-1 px-2 md:text-base text-sm rounded-full hover:bg-[#fafaf9] hover:text-[#242729] transition-all bg-[#fafaf9] text-[#242729]">Work</div>
                    <div class="py-1 px-2 md:text-base text-sm rounded-full hover:bg-[#fafaf9] hover:text-[#242729] transition-all text-[rgba(36,39,41,0.6)]">Info</div>
                </div>
            </div>
        </>
    )
}

export default Nav
