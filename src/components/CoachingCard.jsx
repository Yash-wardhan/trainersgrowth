import React from 'react'

function CoachingCard({title,image}) {
  return (
    <div className='py-5 px-7 flex gap-3 items-center rounded-lg shadow-lg drop-shadow-[10px_35px_30px_rgba(0,0,255)]'>
      <div><img className='w-16' src={image} alt={title}/></div>
      <div><p>{title}</p></div>
    </div>
  )
}

export default CoachingCard
