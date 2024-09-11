import React from 'react'
import bgImage from '../images/Youthbanner.jpg';
const Bg1 = () => {
  return (
    <div className="flex flex-col items-center my-6">
      {/* Centered Text with SVG Icons */}
      <div className="flex items-center justify-center px-6 py-1 text-xl md:text-3xl text-red-600 font-bold italic text-center dark:text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-10 h-10 dark:text-teal-600 inline-block mr-5 text-black"
        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        </svg>
        Youth United, Faith Amplified
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-10 h-10 dark:text-teal-600 inline-block ml-5 text-black"
        >
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        </svg>
      </div>

      {/* Image with Overlay and Centered Title */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-2 overflow-hidden rounded-2xl">
        <img
          src={bgImage}
          alt="About Background"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className=""></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            YOUTH MINISTRIES
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Bg1
