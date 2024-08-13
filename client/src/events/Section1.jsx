import React from "react";
import poster from '.././images/childrens.jpg';

const Section1 = () => {
  return (
    <section className="relative w-full flex justify-center items-center">
      <div className="relative w-full max-w-screen-xl overflow-hidden rounded-2xl shadow-lg mx-3">
        <img
          src={poster}
          alt="Events"
          className="object-cover w-full h-auto rounded-2xl"
        />
      
      </div>
    </section>
  );
};

export default Section1;


