import React from 'react';
import clock from '../images/church_clock_2-removebg-preview.png';

const Section2 = () => {
  return (
    <section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
  <h1 className='mb-3 text-4xl text-red-600 font-bold'>Our Prayers</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
       
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">
        Communication with God. We have experienced that prayer works. Scripture tells us that God hears and responds to our prayers. Whether it is a yes or no or a later, he is listening. As we spend time in prayer our relationship with God grows stronger. God listens to us speak; but we also need to listen to Him as He speaks to us. There are many ways in which God speaks. One of the main ways he speaks to us is through the Bible, His word to us. But, he also speaks through dreams, other people, promptings, signs, and even through times of personal difficulty. If we learn to listen, we will hear him. In scripture mathew 6:5-15 explains about the procedure of the prayer .
         Prayer should be "to god through jesus christ and by the holy spirit" . He will Listern to our prayers.
        </p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-teal-600"></span>
			
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8  dark:text-gray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">
          we have two services one is  6.30am to 8.30am & another one is 8.30am to 10.30am
          <br />
           <span className='text-xl text-red-600 font-semibold'>Our Service Typically 120 Minutes</span></p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-teal-600"></span>
			
		</div>
	</div>
</section>
  );
};

export default Section2;
