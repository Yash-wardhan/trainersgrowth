import React from 'react'

function TrainerCard({image,name}) {
  return (
    <div className=' flex flex-col bg-white shadow-lg items-center rounded-xl justify-center gap-4 py-6 px-8 border-b-2 border-[#0000FF]'>
      <img src={image} alt={name} className='w-32 h-auto' />
      <p className='font-semibold'>{name}</p>
    </div>
  )
}

export default TrainerCard
