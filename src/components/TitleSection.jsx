import React from 'react'

function TitleSection() {
  return (
    <div className='w-full py-20  md:h-[70vh] flex justify-center items-center'>
        <div className='w-full md:w-[750px]  gap-2 px-4 py-4 flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-center leading-snug'>
                what will <span className='text-[#0000FF]'>change</span> in your life ?
            </p>
            <div className='w-full mt-3 '>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='h-[4px] w-5 bg-[#A3A3A3]'></div>
                    <div className='h-[4px] w-14 bg-[#0000FF]'></div>
                </div>
            </div>
            <div className='flex flex-col gap-5 mt-5 px-4 '>
                <div className='flex items-center gap-6 text-md md:text-xl font-semibold'>
                    <div className='w-[25px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="tick" />
                    </div>
                    <div>
                        <p>You will be able to change people’s lives while making an income for yourself.</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 text-md md:text-xl font-semibold'>
                    <div className='w-[25px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="tick" />
                    </div>
                    <div>
                        <p>You will have the freedom to work from anywhere.</p>
                    </div>
                </div>
                <div className='flex  items-center gap-6 text-md md:text-xl font-semibold'>
                    <div className='w-[35px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="tick" />
                    </div>
                    <div>
                        <p>You will build a second stream of income & discover the strategies to turn it into a full time opportunity.</p>
                    </div>
                </div>
            </div>
            <div className="w-full text-sm md:w-3/4 text-center font-extrabold tracking-wide mt-5 py-4 bg-[#FFAC00] text-black md:text-xl rounded-full drop-shadow-[6px_35px_30px_rgba(255,172,0,0.25)]">
                <p>JOIN NOW</p>
            </div>
        </div>
    </div>
  )
}

export default TitleSection
