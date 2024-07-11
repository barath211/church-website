import React from 'react';
import aboutBg from '../images/bg-about.jpg';

const Poster = () => {
  return (
   
      <img
        src={aboutBg}
        alt="About Background"
        className=" object-cover mt-2 w-[1200px] max-w-[95%] mx-auto overflow-hidden rounded-2xl"
      />
    
  );
};

export default Poster;
