import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LogoSection() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="mainContainer z-20 mt-8 px-7 py-4 overflow-hidden w-[90%] mx-auto rounded-3xl shadow-2xl flex flex-col  justify-center">
            <Slider {...settings} className='flex justify-center items-center'>
                <div className="container">
                    <img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/logo3.png" className='w-[200px]' />
                </div>
                <div className="container">
                    <img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/logo4.png" className='w-[200px]' />
                </div>
                <div className="container">
                    <img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/logo5.png" className='w-[200px]' />
                </div>
                <div className="container">
                    <img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/logo1.png" className='w-[200px]' />
                </div>
                <div className="container">
                    <img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2023/03/logo2.png" className='w-[200px]' />
                </div>
            </Slider>
        </div>
    )
}

export default LogoSection
