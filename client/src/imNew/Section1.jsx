import React from 'react';
import imnewBg from '../images/youth 2.jpg';

const Section1 = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-2 overflow-hidden rounded-2xl">
      <img
        src={imnewBg}
        alt="About Background"
        className="object-cover w-full h-full rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          WELCOME TO BETHEL ICRM
        </h1>
      </div>
    </div>
  );
}

export default Section1;
