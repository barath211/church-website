import React from 'react'
import banner from '../images/service4.jpg'
import one from '../images/service1.jpg';
import two from '../images/service2.jpg'
import three from '../images/service3.jpg'
import four from '../images/social5.jpg'
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
        
      </div>

     
    </section>
  )
}

export default Gallery