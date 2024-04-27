import React, { useState } from 'react';

function FeedBackSection() {
    const Accordion = ({ items }) => {
        const [activeIndex, setActiveIndex] = useState(null);
      
        const handleItemClick = (index) => {
          setActiveIndex(index === activeIndex ? null : index);
        };
      
        return (
          <div className="flex flex-col  justify-center items-center">
            <p className='text-center text-4xl font-bold'>Frequently Asked <span className='text-[#0000FF]'>Question</span></p>
            <div className='w-full mt-3 '>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='h-[4px] w-5 bg-[#A3A3A3]'></div>
                    <div className='h-[4px] w-14 bg-[#0000FF]'></div>
                </div>
            </div>
            <div className='sm:w-[70%] mt-20'>
                {items.map((item, index) => (
                <div key={index} className="mb-4">
                    <div
                    className={`flex items-center shadow-md justify-between hover:bg-[#0000FF] hover:text-white font-semibold md:font-bold md:text-xl  bg-gray-200 p-4 cursor-pointer duration-500 ease-in-out transition-all ${
                        activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'
                    }`}
                    onClick={() => handleItemClick(index)}
                    >
                    <div className="font-semibold">{item.title}</div>
                    <div>{activeIndex === index ? "-" : "+"}</div>
                    </div>
                    <div className={`bg-white p-4 duration-300 transition-all ${activeIndex === index ? 'block' : 'hidden'}`}>
                    <p>{item.content}</p>
                    </div>
                </div>
                ))}
            </div>
          </div>
        );
    }

    const items = [
        {
          title: "How will I get the link to attend the program?",
          content: "You will get an email right after you register. Please check the spam and promotions tab in your Inbox if the email doesn’t land in your PRIMARY tab.",
        },
        {
          title: "Why does this program cost only ₹99?",
          content: "The fee is just to make sure to get a commitment from you that you will be there. It is not the value of the program. You can understand the true value of the program only after you attend it yourself.",
        },
        {
          title: "When is the workshop?",
          content: "You can get all the details related to the timings and dates of the workshop at the top of the page.",
        },
        {
          title: "Will I get the recording of the program?",
          content: "This is a program where the trainers will be trained. So no recording will be provided.",
        },
        {
          title: "If I miss attending this time can I attend this again?",
          content: "Yes, you may attend it again at a later date",
        },
        {
          title: "What do I need to keep handy during the webinar?",
          content: "Just an open mind and a book to make a lot of notes.",
        },
    ];
  
    return (
        <div className="container mx-auto mt-8">
            <Accordion className='px-2 py-2' items={items} />
        </div>
    );
}

export default FeedBackSection;
