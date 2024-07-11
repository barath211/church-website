import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import logo from '../../images/church logo.png'
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <div className="flex items-center mb-6">
        <img src={logo} alt="Icon" className="w-20 h-20 mr-2 ml-3 scale-125" />
      </div>
      <ul className="flex-grow">
        <li className="mb-2">
          <Link
            to="/login-users"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Login Users
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/church-members"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Church Members
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/find-users"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Find Users
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/family-details"
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Family Details
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <button className="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded w-full">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
