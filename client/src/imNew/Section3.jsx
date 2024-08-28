import React from 'react';
import churchimg from '../images/pastorimnew.jpg';

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 p-4 md:p-8">
      {/* Directions Section */}
      <div className="w-full md:w-1/2 h-auto md:h-screen bg-red-600 flex flex-col justify-center items-center p-6 md:p-10 font-serif rounded-lg shadow-lg">
        <h1 className="text-xl md:text-3xl text-white mb-5 tracking-wider text-center">Direction</h1>
        
        <h3 className="text-lg md:text-2xl font-semibold pt-2 pb-1 text-white">Driving</h3>
        <p className="py-2 text-base md:text-lg font-light text-gray-200 text-center">
          Start from Coimbatore City Center, Take the road towards Kannampalayam, Follow the signs towards Marudham Nagar, Bethelicrm Church is located in Marudham Nagar, Kannampalayam.
        </p>
        <p className="text-base md:text-lg font-light text-gray-200 text-center">
          Street parking is available throughout the neighbourhood.
        </p>

        <h3 className="py-2 text-lg md:text-2xl font-semibold mt-4 text-white">Bus</h3>
        <p className="py-1 text-base md:text-lg font-light text-gray-200 text-center">Ukkadam Bus-no: 30</p>
        <p className="text-base md:text-lg font-light text-gray-200 text-center">Gandhipuram Bus-no: 65</p>

        <h3 className="py-2 text-lg md:text-2xl font-semibold mt-4 text-white">Walk</h3>
        <p className="pt-1 pb-6 text-base md:text-lg font-light text-gray-200 text-center">
          It's advisable to check the route on a map or navigation app to ensure you follow pedestrian-friendly paths and roadways. Continue along the road towards Marudham Nagar, Bethelicrm Church is located in Marudham Nagar, Kannampalayam.
        </p>
        <button
  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
  onClick={() => window.open("https://www.google.com/maps/place/Bethel+ICRM+Church,+Marudham+Nagar,+Kannampalayam,+Coimbatore,+Tamil+Nadu", "_blank")}
>
  Google Map
</button>


      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-screen rounded-lg overflow-hidden shadow-lg">
        <img src={churchimg} alt="Church" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Section3;
