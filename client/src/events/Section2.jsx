import React from 'react'
import pasMaImage from "../images/pastorma-removebg-preview (1).png"
const Section2 = () => {
  return (
	<section className="dark:bg-gray-100 dark:text-gray-800 bg-gray-200">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl text-red-600">events
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
			Join us for a range of enriching church events including special prayers for collective and personal needs,
			 vibrant youth meetings fostering spiritual growth, and dynamic Sunday worship services. Women’s prayer meetings offer a supportive space for encouragement and intercessory prayer. Celebrate the birth of our Savior at our joyous Christmas celebration with festive music and a special message. Enjoy diverse cultural events that showcase our community’s
			 talents through music, dance, and culinary delights, strengthening our bonds and celebrating our heritage.
			</p>
			
		</div>
		<div className="flex flex-col items-center justify-center p-6 mt-8 mb-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={pasMaImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mb-2" />
			<h1 className='font-bold text-xl '> Meet our Event Co-ordinator </h1>
			<p className='font-bold text-2xl text-red-600'> <span className='font-bold text-2xl text-red-600'>Mrs. Mercy Daniel</span></p>
		</div>
	</div>
</section>
  )
}

export default Section2