import React from 'react';
import image from '../images/about church.jpeg';

const Section1 = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* image */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={image} alt="" className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        {/* content */}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            WELCOME <br />
            <span>TO</span> <br />
            <span className="text-red-600 whitespace-nowrap mx-auto">BETHEL IRCM</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
		  Bethel ICRM Church is a vibrant and mission-driven community committed to embodying the love and teachings of Jesus Christ through comprehensive care and outreach initiatives.The church's mission focuses on nurturing the villages through christ morals for their eternal lives.Actively engages
		   with the local community through various outreach programs, advocating for the rights and well-being
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;


