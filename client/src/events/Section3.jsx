import React from "react";
import eventsImg from "../images/good friday.jpeg";

const Section3 = () => {
  return (
    
//    <div className=" flex p-5  ">

// <a href="#" class="flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
//     <div class="flex flex-col justify-between p-4 leading-normal">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>


// <a href="#" class="flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
//     <div class="flex flex-col justify-between p-4 leading-normal">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>

// <a href="#" class="flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
//     <div class="flex flex-col justify-between p-4 leading-normal">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>


//    </div>

<div className="flex items-center justify-normal gap-5 mt-5 w-fit mx-auto max-w-[90%] md:py-10 px-5 snap-x overflow-x-scroll">
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={eventsImg} alt="BlogImage1" className='w-[100%] mx-auto md:w-[90%]' />
                    <div className="flex items-center justify-between">
                        
                        <span>📅  2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor  consectetur adipisicing elit. Mollitia, id enim dignissimos minima quaerat beatae.</div>
                    
                </div>
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={eventsImg} alt="BlogImage2" className='w-[100%] mx-auto md:w-[90%]' />
                    <div className="flex items-center justify-between">
                        
                        <span>📅  2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor sit ametcing elit. Mollitia.</div>
                  
                </div>
                <div className="flex snap-start flex-col gap-5 min-w-[250px] w-[280px] md:w-[300px] p-3 lg:hover:shadow-2xl duration-300 transition-all bg-white lg:hover:-translate-y-5">
                    <img src={eventsImg} alt="BlogImage3" className='w-[100%] mx-auto md:w-[90%]' />
                    <div className="flex items-center justify-between">
                        
                        <span>📅  2024</span>
                    </div>
                    <div className="text-[12.5px] md:text-[13px] lg:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id enim dignissimos minima quaerat beatae.</div>
                    
                </div>
            </div>

  );
};

export default Section3;