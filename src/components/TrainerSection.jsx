import React from 'react';
import TrainerCard from './TrainerCard';

function TrainerSection() {
  const trainers = [
    { id: 1, name: 'Trainer 1', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-4.png' },
    { id: 2, name: 'Trainer 2', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-7.png' },
    { id: 3, name: 'Trainer 3', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-9.png' },
    { id: 4, name: 'Trainer 4', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-11.png' },
    { id: 5, name: 'Trainer 5', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-13.png' },
    { id: 6, name: 'Trainer 6', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-4-1.png' },
    { id: 7, name: 'Trainer 7', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-7-1.png' },
    { id: 8, name: 'Trainer 8', image: 'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/Ellipse-5.png' },
  ];
  console.log( trainers.map(item=>(item.name)) )

  return (
    <div className='bg-[#ECF2F6]  -z-20 flex flex-col justify-center items-center py-20'>
      <div className='mt-10 text-center '>
        <p className='text-4xl tracking-wide font-extrabold leading-tight'>World’s Top  <span className='text-[#0000FF]'>Trainers Trained</span> by Blair Singer</p>
      </div>
      <div className='w-full mt-4 '>
        <div className='flex gap-4 justify-center items-center'>
            <div className='h-[4px] w-5 bg-[#A3A3A3]'></div>
            <div className='h-[4px] w-14 bg-[#0000FF]'></div>
        </div>
      </div>
      {/* Render each TrainerCard component for each trainer */}
      <div className=" w-[90%] mt-20 flex flex-wrap gap-10 justify-center items-center">
        {trainers.map(trainer => (
          <TrainerCard name={trainer.name} image={trainer.image} />
        ))}
      </div>
    </div>
  );
}

export default TrainerSection;
