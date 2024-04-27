import React from 'react';
import WebinarCard from './WebinarCard';

function WebinarSection() {
    const webinars = [
        { id: 1, title: 'How to start a profitable online coaching / teaching / training business even if you are a beginner & have no clarity.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg' },
        { id: 2, title: 'What are the 12 different kind of marketing funnels & pick the one which will be best suited for you.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg' },
        { id: 3, title: 'You will build a second stream of income & discover the strategies to turn it into a full time opportunity.',image:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg' },
        { id: 4, title: 'How to instantly get clarity on your topic / domain / niche & learn how to differentiate yourself from the crowd.',image:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg' },
        { id: 5, title: 'How to design, launch, market & sell your digital products really fast.',image:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg' },
        { id: 6, title: 'Strategies used by India’s most famous & successful trainers & coaches to scale their business.' ,image:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg'},
    ];

    return (
        <div className='py-24  flex justify-center items-center bg-[#ECF2F6]'>
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <p className='text-4xl font-bold text-center'>What will <span className='text-[#0000FF]'>you learn</span> in the Webinar ?</p>
                    <div className='w-full mt-3 '>
                        <div className='flex gap-4 justify-center items-center'>
                            <div className='h-[4px] w-5 bg-[#A3A3A3]'></div>
                            <div className='h-[4px] w-14 bg-[#0000FF]'></div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 sm:w-[70%] mt-20 text-md md:text-xl font-semibold grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {/* Render each webinar title and image */}
                    {webinars.map(webinar => (
                        <WebinarCard image={webinar.image} title={webinar.title} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WebinarSection;
