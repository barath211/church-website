import React from 'react';
import mssgImg from "../images/mssg image.jpg";

const Section5 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 h-screen'>
        <img src={mssgImg} alt="Message Image" className='w-full h-full object-cover' />
      </div>
      <div className='w-full md:w-1/2 h-screen bg-red-600 flex flex-col justify-center items-center px-6 py-12 md:py-0'>
        <h1 className='font-bold text-5xl text-center text-white mb-8'>Feel Like Home</h1>
        <p className='text-lg md:text-xl font-semibold text-gray-300 text-center mb-8 px-3'>
          No matter who you are or your background, you’ll be welcome here. We hope that you feel at home, feel welcome, but most of all that you experience Jesus in a real way. We can’t wait to meet you on Sunday!
        </p>
        <div className='text-center'>
          <h1 className='font-bold text-3xl mb-3 text-white'>Learn More</h1>
          <p className='font-semibold text-xl text-white mb-8'>About Bethel ICRM Church</p>
          <button className='bg-gray-400 hover:bg-gray-600 text-white font-bold px-6 py-3 mb-2 rounded hover:bg-gray-700'>
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
