import React from 'react';
import churchlogo from '../images/church logo.png';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-500 dark:text-gray-800">
      <div className="container flex flex-col lg:flex-row lg:justify-between py-10 mx-auto space-y-8">
        {/* Logo and Church Name */}
        <div className="lg:w-1/3 mr-4">
          <a rel="noopener noreferrer" href="#" className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full dark:bg-teal-600">
              <img src={churchlogo} alt="Church Logo" className="object-cover w-full h-full" />
            </div>
            <span className="self-center text-lg font-bold">BETHEL ICRM</span>
          </a>
        </div>

        {/* Ministry Links */}
        <div className="grid grid-cols-2 lg:w-2/3 lg:grid-cols-4 gap-x-3 gap-y-8">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-[1rem]">Ministries</h3>
            <ul className="space-y-1">
              <li>
                <Link to={"Childrenministry"} className="block px-4 py-2 text-gray-200">Children's</Link>
              </li>
              <li>
                <Link to={"Youthministry"} className="block px-4 py-2 text-gray-200">Youth</Link>
              </li>
              <li>
                <Link to={"Womenministry"} className="block px-4 py-2 text-gray-200">Women's</Link>
              </li>
              <li>
                <Link to={"Socialservice"} className="block px-4 py-2 text-gray-200">Social service</Link>
              </li>
              <li>
                <Link to={"Worship"} className="block px-4 py-2 text-gray-200">Worship</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-[1rem]">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to={"ImNew"} className="block px-4 py-2 text-gray-200">I'm New</Link>
              </li>
              <li>
                <Link to={"Events"} className="block px-4 py-2 text-gray-200">Events</Link>
              </li>
              <li>
                <Link to={"About"} className="block px-4 py-2 text-gray-200">About us</Link>
              </li>
              <li>
                <Link to={"Contribute"} className="block px-4 py-2 text-gray-200">Contribute</Link>
              </li>
            </ul>
          </div>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
  <div className="uppercase dark:text-gray-900 font-bold text-[1rem] mb-3">Contact</div>
  <div className="space-y-3">
    <div className="flex items-center justify-center lg:justify-start text-white">
      <MdLocationPin className="w-10 text-red-600 mr-2" />
      <span className="text-[16px] italic">Bethel icrm church 12/08 marudham nagar coimbatore kannampalayam - 641402</span>
    </div>
    <div className="flex items-center justify-center lg:justify-start text-white">
      <IoMailOutline className="mr-2" />
      <span className="text-[16px] italic">bethelicrmcoimbatore@gmail.com</span>
    </div>
    <div className="flex items-center justify-center lg:justify-start text-white">
      <FaPhone className="mr-2" />
      <span className="text-[14px]">91+ 987654321</span>
    </div>
  </div>
</div>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-end space-x-6 lg:w-1/3">
          <a
            href="https://youtube.com/@bethelicrmchurchcoimbatore?si=l7fNNhwNG7QbppmA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition-colors duration-300"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/bethel_icrm_church?igsh=MTA2OWwwbmpydmcwMA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-700 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/share/Hjjaa2JCmzjTEa6R/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-6 text-sm text-center dark:text-gray-600">©2024 All rights reserved by bethel_icrm_church. <p>
      <p className='text-white'>Designed And Hosting By </p>
        </p></div>
    
       
      
    </footer>
  );
};

export default Footer;
