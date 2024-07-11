import React from "react";
import avatar from "../images/avatar 2.png";

const Section4 = () => {
  return (
    <div className="bg-gray-600 w-full h-full">
      <div>
        <h1 className="text-3xl text-gray-200 font-bold pt-8 text-center mb-10">
          Meet Our Pastor's
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={avatar} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Pastor Daniel</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Lead Pastor</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 m-4">
          <img src={avatar} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">Mrs. Mercy Daniel</h2>
              <p className="px-5 text-xs sm:text-base text-gray-600">Co-Pastor</p>
            </div>
          </div>
        </div>
      </div>

{/* asst pastors */}

<div>
  <h1 className="text-3xl text-gray-200 text-center my-10">Assistant Pastors</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center pb-5">
  <div className="flex flex-col justify-center items-center m-4">
    <img src={avatar} alt="" className="w-[160px] h-[160px] rounded-full object-cover" />
    <h1 className="text-xl text-gray-200 font-semibold mt-2">Samuel</h1>
  </div>

  <div className="flex flex-col justify-center items-center m-4">
    <img src={avatar} alt="" className="w-[160px] h-[160px] rounded-full object-cover" />
    <h1 className="text-xl text-gray-200 font-semibold mt-2">Simson</h1>
    <h1 className="text-base text-gray-200 mt-2">Media Co-ordinator</h1>
  </div>

  <div className="flex flex-col justify-center items-center m-4">
    <img src={avatar} alt="" className="w-[160px] h-[160px] rounded-full object-cover" />
    <h1 className="text-xl text-gray-200 font-semibold mt-2">Jagadesh</h1>
  </div>

  <div className="flex flex-col justify-center items-center ">
    <img src={avatar} alt="" className="w-[160px] h-[160px] rounded-full object-cover" />
    <h1 className="text-xl text-gray-200 font-semibold mt-2">Praveen</h1>
  </div>
</div>


    </div>
  );
};

export default Section4;
