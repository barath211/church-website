import React from "react";
import "./Section2.css"; // Ensure you import the custom CSS

const Section2 = () => {
  return (
    <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center italic">
          Our Mission
        </h1>
      </div>

      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {/* Section 1: Holistic Care */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg fade-in card">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <h1 className="text-red-600 font-bold pb-10">Holistic Care</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-teal-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Provide nutritious food, safe shelter, and comprehensive healthcare to all children. Create a loving and supportive environment
               that fosters emotional healing and growth. widow sheltering, tailoring for their daily wage.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-teal-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>

        {/* Section 2: Spiritual Nurture */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg fade-in card">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <h1 className="text-red-600 font-bold pb-10">Spiritual Nurture</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-teal-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Instill strong Christian values and principles through regular Bible study, worship, and prayer.
              Encourage a personal relationship with Jesus Christ and spiritual growth through discipleship programs.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-teal-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>

        {/* Section 3: Quality Education */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg fade-in card">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <h1 className="text-red-600 font-bold pb-10">Quality Education</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-teal-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Offer high-quality education that equips children with knowledge and skills for 
              future success.Foster critical thinking, creativity, and leadership through a well-rounded curriculum.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-teal-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>

        {/* Section 4: Community and Family Integration */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg fade-in card">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
              <h1 className="text-red-600 font-bold pb-10">Community and Family Integration</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-teal-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Provide counseling and support to help children understand their value and potential.
              Where possible, facilitate safe and supportive reunifications with family members. 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-teal-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
