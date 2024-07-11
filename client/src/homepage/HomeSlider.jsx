import React, { useEffect, useState } from 'react';

const slides = [
  { src: "https://a-static.besthdwallpaper.com/dragon-epic-battle-wallpaper-3554x1999-82405_53.jpg", alt: "Image One" },
  { src: "https://images5.alphacoders.com/865/865199.jpg", alt: "Image Two" },
  { src: "https://c4.wallpaperflare.com/wallpaper/540/4/24/the-storm-water-rocks-lightning-wallpaper-preview.jpg", alt: "Image Three" },
  { src: "https://a-static.besthdwallpaper.com/fantasy-epic-battle-against-dragon-wallpaper-1920x1080-82470_48.jpg", alt: "Image Four" },
  { src: "https://images5.alphacoders.com/296/296477.gif", alt: "Image Five" }
];

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000);

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

