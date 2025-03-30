import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'; 

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 flex flex-col items-center justify-center h-screen w-20 text-white ">
      <ul className="flex flex-col space-y-7 ml-2">
        <li className="bg-green-700 p-2 rounded-full hover:bg-gray-500">
          <Link to="/" className="">
            <FaHome size={28} /> 
          </Link>
        </li>
        <li className="bg-green-700 p-2 rounded-full hover:bg-gray-500">
          <Link to="/about">
            <FaUser size={28} />
          </Link>
        </li>
        <li className="bg-green-700 p-2 rounded-full hover:bg-gray-500">
          <Link to="/project">
            <FaBriefcase size={28} />
          </Link>
        </li>
        <li className="bg-green-700 p-2 rounded-full hover:bg-gray-500">
          <Link to="/contact">
            <FaEnvelope size={28} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;