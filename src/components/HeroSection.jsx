function Herosection() {
  return (
    <div className='flex flex-col justify-center items-center mt-10 md:mt-0 py-5'>
      {/* title  */}
      <div className='w-full md:w-[450px] text-[23px] text-center py-2 bg-[#0000FF] text-white rounded-3xl'>
        <p>Start Your Online Coaching Business
          <br />
        <span className="font-bold"> In less than 30 days</span></p>
      </div>
      {/* title-hero  */}
      <div className="w-[400px] sm:w-full mt-5 text-3xl text-center flex flex-col gap-3">
        <p className="font-bold">Learn How to turn your knowledge, Skills & Expertise into a source of income</p>
        <p className="font-semibold text-[17px]">& build a profitable business while helping others</p>
      </div>
      {/* frame  */}
      <div className="flex flex-col md:flex-row justify-center gap-7 items-center mt-5">
        {/* left  */}
        <div className="flex flex-col items-center justify-center">
          <div className=" w-[400px] md:w-[500px]"><img src="https://trainersgrowthsummit.sgacademy.info/wp-content/uploads/2024/02/Group-1-min.png" alt="Trainer"/></div>
          <div className="mt-5 text-center">
            <p className="text-4xl font-bold text-[#0000FF]">Trainer Growth Webinar</p>
            <p className="text-xl mt-3 font-semibold">We will be your coach for 3 Hours</p>
          </div>
        </div>
        {/* right  */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#ECF2F6] rounded-2xl flex flex-col justify-center items-center text-3xl px-8 py-5">
            <p className="font-bold">Why attend this workshop?</p>
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex text-[20px] px-2 py-2 bg-white rounded-xl leading-none gap-4 items-center">
                <div className="w-[25px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="Tick" />
                </div>
                <div className="text-[19px] font-semibold">
                  <p>Get the exact steps to Setup Your Online <br />
                     Coaching Business in less than 30 days.</p>
                </div>
              </div>
              <div className="flex text-[20px] px-2 py-2 bg-white rounded-xl leading-none gap-4 items-center">
                <div className="w-[25px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="Tick" />
                </div>
                <div className="text-[19px] font-semibold" >
                  <p>Get the strategies to scale your <br /> existing coaching business while increasing your <br /> profitability.</p>
                </div>
              </div>
              <div className="flex text-[20px] px-2 py-2 bg-white rounded-xl leading-none gap-4 items-center">
                <div className="w-[25px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="Tick" />
                </div>
                <div className="text-[19px] font-semibold">
                  <p>Learn how to become a world class trainer by <br /> learning how to deliver breakthrough results <br /> to your students.</p>
                </div>
              </div>
              <div className="flex text-[20px] px-2 py-2 bg-white rounded-xl leading-none gap-4 items-center">
                <div className="w-[25px]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Eo_circle_purple_checkmark.svg" alt="Tick" />
                </div>
                <div className="text-[19px] font-semibold">
                  <p>Learn the exact strategies of India’s most <br /> successful trainers & coaches to scale their <br /> business.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 text-center font-extrabold tracking-wide mt-5 py-4 bg-[#FFAC00] text-black text-xl rounded-full drop-shadow-[6px_35px_30px_rgba(255,172,0,0.25)]"><p>JOIN NOW FOR RS 99</p></div>
          <div className=" mt-5 flex flex-col gap-5 justify-center items-center">
            <p className="font-semibold sm:font-bold text-center text-[20px] sm:text-xl">(Enrollment closes on 27th April 2024) <br/> WORKSHOP STARTS ON 28th April 2024 (9:30AM))</p>
            <p className="sm:font-semibold">Language - Basic English</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
