import React from 'react'
import bgImage from '../images/childrens.jpg'




const Bg1 = () => {
  return (
    <div>
        <div className="flex items-center justify-center  p-6 mt-8 lg:mt-0 h-screen sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={bgImage} alt="" className="object-contain h-screen sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
    </div>
  )
}

export default Bg1