import React from 'react'

const Bg1 = () => {
  return (
    <div className="flex flex-col my-6 shadow-lg fade-in card w-full md:max-w-full">
      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
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
          Helping Hands, Caring Hearts
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
      </div>
    </div>
  )
}

export default Bg1
