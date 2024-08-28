import React from "react";
import avatar from "../images/avatar 2.png";
import pastor from '../images/pastor.png';
import pasma from '../images/pastoramma.jpg';
import simson from '../images/simson.png';
import praveen from '../images/praveen.png';

const Section4 = () => {
  return (
    <div className="bg-gray-200">

      <div>
        <h1 className="text-3xl text-red-600 font-bold pt-8 text-center mb-10">
          Meet Our Pastors
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={pastor} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Pastor Daniel</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Lead Pastor</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={pasma} alt="" className="w-32 h-32 mx-auto rounded-full object-cover scale-100 bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Mrs. Mercy Daniel</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Co-Pastor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assistant Pastors */}
      <div className="mb-5">
        <h1 className="text-3xl text-red-600 font-bold pt-8 text-center">Assistant Pastors</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center pb-5">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={avatar} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-lg font-bold sm:text-2xl">Samuel</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Co-Pastor</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={simson} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 object-cover scale-100 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-lg font-bold sm:text-2xl">Simson</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Co-Pastor</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={praveen} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 object-cover scale-100 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-lg font-bold sm:text-2xl">Praveen</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Co-Pastor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
