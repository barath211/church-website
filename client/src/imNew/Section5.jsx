import React from 'react';
import Img from "../images/youth 2.jpg";

const Section5 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen px-6 md:px-12">
      <div className="w-full md:w-5/6 h-1/2 md:h-full">
        <img 
          src={Img} 
          alt="Message Image" 
          className="w-full h-full object-cover rounded-2xl" 
        />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center px-6 py-12 md:py-0">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-black mb-8">
          Feel Like Home
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-8 px-3">
          No matter who you are or your background, you’ll be welcome here. We hope that you feel at home, feel welcome, but most of all that you experience Jesus in a real way. We can’t wait to meet you on Sunday!
        </p>
      </div>
    </div>
  );
};

export default Section5;




// import React from 'react';
// import mssgImg from '../images/youths...jpg';

// const FullscreenImageSection = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <img
//         src={mssgImg}
//         alt="Message Image"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />
//       <div className="relative z-10 w-full h-full flex flex-col justify-center items-center bg-red-600 bg-opacity-60 px-6 py-12">
//         <h1 className="font-bold text-5xl text-center text-white mb-8">
//           Feel Like Home
//         </h1>
//         <p className="text-lg md:text-xl font-semibold text-gray-300 text-center mb-8 px-3">
//           No matter who you are or your background, you’ll be welcome here. We
//           hope that you feel at home, feel welcome, but most of all that you
//           experience Jesus in a real way. We can’t wait to meet you on Sunday!
//         </p>
//         <div className="text-center">
//           <h1 className="font-bold text-3xl mb-3 text-white">Learn More</h1>
//           <p className="font-semibold text-xl text-white mb-8">
//             About Bethel ICRM Church
//           </p>
//           <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold px-6 py-3 mb-2 rounded">
//             Get More Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullscreenImageSection;
