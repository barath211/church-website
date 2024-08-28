import React from 'react';
import mssgImg from "../images/santa.webp";

const Section5 = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Responsive Image */}
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <img
          src={mssgImg}
          alt="Message Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 h-auto md:h-screen bg-red-600 flex flex-col justify-center items-center px-6 py-12 md:py-0">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white mb-8">Feel Like Home</h1>
        <p className="text-lg md:text-xl font-semibold text-gray-300 text-center mb-8 px-3">
          No matter who you are or your background, you’ll be welcome here. We hope that you feel at home, feel welcome, but most of all that you experience Jesus in a real way. We can’t wait to meet you on Sunday!
        </p>
        <div className="text-center">
          <h1 className="font-bold text-2xl sm:text-3xl mb-3 text-white">Learn More</h1>
          <p className="font-semibold text-lg sm:text-lg text-gray-300 mb-8">At our church, we embrace everyone with open arms. Whether you're new to the area or have been a part of our community for years, we want you to know that you are valued and cherished. Our mission is to create a space where you feel at home and can connect with others in a meaningful way. We invite you to join us on Sundays, where you’ll find a supportive and loving environment. Come as you are, 
            and let us share with you the love and grace of Jesus. We look forward to meeting you and journeying together in faith and friendship.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Section5;
