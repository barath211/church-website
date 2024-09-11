import React, { useEffect, useState } from 'react';
import bg3 from '../images/banner1church.jpg'
import bg5 from '../images/churchbackimage.jpg'
import bg2 from '../images/BG-2.jpg'
import bg4 from '../images/imgpasma.jpg'

const slides = [
  { src: bg3, alt: "Image One" },
  { src: bg5, alt: "Image Two" },
  { src: bg2, alt: "Image Three" },
  { src: bg4, alt: "Image Four" },
 
];

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-2'>
      <div className="relative w-[1200px] max-w-[95%] mx-auto overflow-hidden rounded-2xl">
        <div className="flex transition-transform ease-linear duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide.src} alt={slide.alt} className='object-cover min-w-full w-[100%] border border-gray-400 max-h-[590px] h-auto mx-auto' />
          ))}
        </div>
        <div className="absolute left-2/4 -translate-x-2/4 gap-2 bottom-5 w-fit px-3 py-1 rounded-full bg-white bg-opacity-30 backdrop-blur-xl flex items-center justify-center">
          {slides.map((_, index) => (
            <div key={index} className={`${currentSlide === index ? "w-[15px] md:w-[18px]" : "w-[5px] md:w-[8px]"} h-[5px] md:h-[8px] rounded-full bg-white`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;

