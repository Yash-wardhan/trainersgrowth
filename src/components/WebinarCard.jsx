import React from 'react'

function WebinarCard({image,title}) {
  return (
    <div className='py-5 px-7 rounded-xl shadow-sm bg-white flex justify-center items-center gap-4'>
      <img className='w-[25px]' src={image} alt="Tick" />
      <p>{title}</p>
    </div>
  )
}

export default WebinarCard
