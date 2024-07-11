import React from 'react'
import avatar from '../images/avatar 2.png'
import dhanush from '../images/dhanush church.JPG'
import mirna from '../images/mirna church.JPG'
import sachin from '../images/sachin church.JPG'
import lijo from '../images/lijo church.jpg'
import legori from '../images/legori church.JPG'
import adlin from '../images/adlin church.JPG'
import sam from '../images/sam music church.JPG'
import jamuna from '../images/jamuna church.jpg'
import maclin from '../images/maclin 6.png'
import ebi from '../images/ebi.jpg'
const Section4 = () => {
  return (
    <div className="mt-8 mb-8">
      <h1 className="text-center text-3xl text-black font-bold">
        Meet Our Ministry Co-Ordinator's
      </h1>

      {/* col 1 */}
      <div className="flex flex-wrap justify-around items-center mt-8 mb-12">
        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={avatar}
            alt=""
            className="w-[160px] h-[160px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Pradeep</h1>
          <p>Youth Co-Ordinator</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={mirna}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Mirana Joy</h1>
          <p>Youth Co-Ordinator</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={dhanush}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Dhanush</h1>
          <p>Kids Co-Ordinator</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={maclin}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Maclin</h1>
          <p>Kids Co-Ordinator</p>
        </div>
      </div>

      {/* col 2 */}
      <div className="flex flex-wrap justify-around items-center mt-8 mb-12">
        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={ebi}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Ebinesar</h1>
          <p>Media Team</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={legori}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Legori</h1>
          <p>MediaTeam</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={sachin }
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Sachin</h1>
          <p>Media Team</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={lijo}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover  "
          />
          <h1 className="mt-1 mb-1">Lijo</h1>
          <p>Media team</p>
        </div>
      </div>

      {/* col 3 */}
      <div className="flex flex-wrap justify-around items-center mt-8 mb-12">
        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={adlin}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Adlin Cherryl</h1>
          <p>Worship Co-Ordinator</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={sam}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Samchrist</h1>
          <p>Worship Co-Ordinator</p>
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <img
            src={jamuna}
            alt=""
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
          <h1 className="mt-1 mb-1">Jamuna</h1>
          <p>Women's Co-Ordinator</p>
        </div>

        
      </div>
    </div>
  )
}

export default Section4



