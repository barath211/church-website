import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import banner from '../images/bannerimage.jpg'
import banner1 from '../images/img1.jpg';
import one from '../images/child1.jpg'
import two from '../images/child2.jpg'
import three from '../images/child3.jpg'
import four from '../images/child4.jpg'
import five from '../images/child5.jpg'
import six from '../images/child6.jpg'
import seveen from '../images/child7.jpg'
import eight from '../images/child8.jpg'

const Gallery = () => {
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      {/* Gallery Images */}
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={banner}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square object-cover"
        />
       
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={one}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={two}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={three}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={four}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={five}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={six}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={seveen}
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover"
          src={eight}
        />
        <img
          src={banner1}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square object-cover"
        />
      </div>

      {/* Social Media Links */}
      <div className="mt-6 text-center">
        <h1 className="text-xl font-semibold mb-4">Children's Ministries Social Media Links</h1>
        <div className="flex justify-center space-x-6">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/bethelkidsclub_official?igsh=MWoxaWRtY2RkNnRuaA==" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com/@bethelkidsclub" // Replace with your YouTube link
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

