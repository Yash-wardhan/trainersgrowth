import React from 'react';
import CoachingCard from './CoachingCard';

function CoachingSection() {
  const CoachingCardData = [
    { id:1,title:'Yoga/Meditation',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/yoga.png' },
    { id:2,title:'Therapy/Counselling',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/therapy.png' },
    { id:3,title:'Personal Development',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/personal-development.png' },
    { id:4,title:'Finance/Accounting',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/document.png' },
    { id:5,title:'Building Healthy Habits',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/lifestyle.png' },
    { id:6,title:'Career Growth',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/development.png' },
    { id:7,title:'Business Growth',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/data-report.png' },
    { id:8,title:'Dancing/Writing',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/dance.png' },
    { id:9,title:'Accounting',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/accounts.png' },
    { id:10,title:'MS Excel,Power Point',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/xls-file.png' },
    { id:11,title:'Coding / Science',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/test.png' },
    { id:12,title:'Marketing / Sales',image:'https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/digital-marketing.png' },
  ]; 

  return (
    <div className=' py-20 px-1 sm:px-4 flex justify-center items-center flex-col'>
      <div className='text-4xl font-bold'>
        <p className='text-center'>Examples of what you can build a <span className='text-[#0000FF]'>coaching business about!</span></p>
        <div className='w-full mt-5 '>
          <div className='flex gap-4 justify-center items-center'>
            <div className='h-[4px] w-5 bg-[#A3A3A3]'></div>
            <div className='h-[4px] w-14 bg-[#0000FF]'></div>
          </div>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        {/* Render each coaching card */}
        {CoachingCardData.map(item => (
          <CoachingCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default CoachingSection;
