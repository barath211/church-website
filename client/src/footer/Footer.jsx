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
    <footer className="px-4 py-8 bg-gray-500 dark:text-gray-800">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and Church Name */}
        <div className="flex justify-center lg:justify-start">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-full dark:bg-teal-600 flex items-center justify-center">
              <img src={churchlogo} alt="Church Logo" className="object-cover w-full h-full scale-125" />
            </div>
            <span className="text-lg font-bold">BETHEL ICRM</span>
          </a>
        </div>

        {/* Ministry Links */}
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-[1rem]">Ministries</h3>
          <ul className="space-y-1">
            <li>
              <Link to="Childrenministry" className="block px-4 py-2 text-white">Children's</Link>
            </li>
            <li>
              <Link to="Youthministry" className="block px-4 py-2 text-white">Youth</Link>
            </li>
            <li>
              <Link to="Womenministry" className="block px-4 py-2 text-white">Women's</Link>
            </li>
            <li>
              <Link to="Socialservice" className="block px-4 py-2 text-white">Social service</Link>
            </li>
            <li>
              <Link to="Worship" className="block px-4 py-2 text-white">Worship</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-[1rem]">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="ImNew" className="block px-4 py-2 text-white">I'm New</Link>
            </li>
            <li>
              <Link to="Events" className="block px-4 py-2 text-white">Events</Link>
            </li>
            <li>
              <Link to="aboutUs" className="block px-4 py-2 text-white">About us</Link>
            </li>
            <li>
              <Link to="Contribute" className="block px-4 py-2 text-white">Contribute</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 text-center lg:text-left">
          <div className="uppercase dark:text-gray-900 font-bold text-[1rem]">Contact</div>
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start text-white">
              <MdLocationPin className="w-10 h-10 text-red-600 mr-2" />
              <span className="text-[16px] italic">Bethel icrm church 12/08 marudham nagar coimbatore kannampalayam - 641402</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start text-white">
              <IoMailOutline className="w-4 h-4 mr-2 text-black "/>
              <span className="text-[16px] italic">bethelicrmcoimbatore@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start text-white">
              <FaPhone className="w-4 h-4 mr-2 text-black " />
              <span className="text-[14px]">91+ 987654321</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps and Social Media Links */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Google Maps Embed */}
        <div className="w-full lg:w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.572956280802!2d77.08804777415885!3d10.995571055115116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857092f70a2a1%3A0xd5b46daf7f077b5a!2sBETHEL%20ICRM%20CHURCH!5e0!3m2!1sen!2sin!4v1720714010772!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center lg:items-end space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900 font-bold text-[1rem]">Social Media</h3>
          <div className="flex justify-center lg:justify-end space-x-6 mb-3">
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
              className="text-white hover:text-pink-600 transition-colors duration-300"
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
      </div>
<hr  className='mt-2 mb-1'/>
      {/* Copyright */}
      <div className="py-6 text-sm text-center dark:text-gray-600">
      <p className='text-white mb-2 text-[18px] font-bold'>Designed And Hosting By Barath </p>
        <p className=''>©2024 All rights reserved by bethel_icrm_church.</p>
      </div>
    </footer>
  );
};

export default Footer;
