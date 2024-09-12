import React from 'react'
import praying from '../images/youthpraying.jpg'
const Bibleverse = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center p-4'>
        {/* left side */}
        <div className=' w-full md:w-1/2 p/4'>
        <h2 className="text-xl font-semibold  mb-2">Bible Verses</h2>
     <h1 className='font-semibold text-xl text-red-600 italic'>"Don't let anyone look down on you because you are young, but set an example for the believers
         in speech, in conduct, in love, in faith, and in purity."
         <span>--Timothy 4:12</span></h1>
    </div>
    {/* right side */}
    <div className='w-full md:w-1/2 p-4'>
        <img src={praying} alt="" className='rounded-md'/>
    </div>
    </div>
  )
}

export default Bibleverse
