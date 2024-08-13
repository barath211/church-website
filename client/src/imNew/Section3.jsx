import React from 'react';
import churchimg from '../images/pastorimnew.jpg';

 

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 py-6 md:py-12">
  <div className="w-full md:w-1/2 h-auto md:h-screen bg-red-600 flex flex-col justify-center items-center px-4 md:px-6 py-8 md:py-12 font-serif rounded-lg md:rounded-xl">
    <h1 className="text-xl md:text-4xl text-white mb-3 mt-2 uppercase ">Direction</h1>
    <h3 className="text-xl md:text-2xl font-semibold pt-2 pb-1">Driving</h3>
    <p className="py-2 text-lg md:text-xl font-light text-gray-200">
      Start from Coimbatore City Center, Take the road towards Kannampalayam, Follow the signs towards Marudham Nagar,
      Bethelicrm Church is located in Marudham Nagar, Kannampalayam.
    </p>
    <p className="text-lg md:text-xl font-light text-gray-200">
      Street parking is available throughout the neighborhood.
    </p>
    <h3 className="py-2 text-2xl md:text-3xl font-semibold mt-3">Bus</h3>
    <p className="py-1 text-lg md:text-xl font-light text-gray-200">Ukkadam Bus-no: 30</p>
    <p className="text-lg md:text-xl font-light text-gray-200">Gandhipuram Bus-no: 65</p>
    <h3 className="py-2 text-2xl md:text-3xl font-semibold mt-3">Walk</h3>
    <p className="pt-1 pb-10 text-lg md:text-xl font-light text-gray-200">
      It's advisable to check the route on a map or navigation app to ensure you follow pedestrian-friendly paths and roadways,
      Continue along the road towards Marudham Nagar,
      Bethelicrm Church is located in Marudham Nagar, Kannampalayam.
    </p>
    <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-3">
      Google Map
    </button>
  </div>

  <div className="w-full md:w-1/2 h-64 md:h-screen rounded-lg md:rounded-xl overflow-hidden">
    <img src={churchimg} alt="Church" className="w-full h-full object-cover" />
  </div>
</div>

  
  );
};

export default Section3;
