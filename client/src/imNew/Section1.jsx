import React from 'react';
import posterImg from "./../images/youth 2.jpg";

const Section1 = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative w-[1200px] max-w-[95%] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={posterImg}
          alt="Message Image"
          className="object-cover w-full h-auto rounded-2xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-700 bg-opacity-60 rounded-2xl">
          <h1 className="text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl">
            WELCOME TO <span className="block sm:inline">"BETHEL ICRM"</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
