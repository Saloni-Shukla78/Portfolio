import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <nav className={`fixed left-0 top-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm h-screen w-16`}> 
      <ul className="flex flex-col space-y-6"> 
        <li>
          <Link to="/" className={`text-${isDarkMode ? 'white' : 'gray-800'} hover:text-green-500`}>
            <FaHome size={28} />
          </Link>
        </li>
        <li>
          <Link to="/about" className={`text-${isDarkMode ? 'white' : 'gray-800'} hover:text-green-500`}>
            <FaUser size={28} />
          </Link>
        </li>
        <li>
          <Link to="/project" className={`text-${isDarkMode ? 'white' : 'gray-800'} hover:text-green-500`}>
            <FaBriefcase size={28} />
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`text-${isDarkMode ? 'white' : 'gray-800'} hover:text-green-500`}>
            <FaEnvelope size={28} />
          </Link>
        </li>
      </ul>
      <button 
        onClick={toggleTheme} 
        className={`mt-8 rounded-full p-2 hover:bg-gray-100 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />} 
      </button>
    </nav>
  );
};

export default Navbar;




// import React from 'react'
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
// import { useState } from 'react';

// function Navbar() {
//     const [menu,setMenu]=useState(false);
//   return (
//     <>
//     <div className ="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-emerald-800 shadow-md h-16 md:h-20 fixed top-0 left-0 right-0 bg-green-700 ">
//         <div className="flex justify-between items-center h-16 md:h-20" >
//             <div className ="flex space-x-2">
//                 <h1 className ="font-semibold text-2xl cursor-pointer">Saloni
//                 <p className="text-sm">Web Developer</p>
//                 </h1>
               
//             </div>
          
//             <div>
//                 <ul className="hidden md:flex space-x-8 text-lg ">
//                     <li>Home</li>
//                     <li href="#about">About Me</li>
//                     <li>Education</li>
//                     <li>Experience</li>
//                     <li>Contacts</li>
//                 </ul>
//                 <div className='md:hidden' onClick={() => setMenu (!menu)}>
//                     {menu ? <IoClose size={22}/> : <FiMenu size={22} /> }
//                     </div>
//             </div>
//         </div>
//         {menu && (
//              <div>
//              <ul className='md:hidden flex flex-col h-screen w-1/2 pt-5 pl-3 gap-2'>
//                      <li>Home</li>
//                      <li>About Me</li>
//                      <li>Education</li>
//                      <li>Experience</li>
//                      <li>Contacts</li>
//               </ul>
//          </div>
//         )}
          
       
//     </div>
//     </>
//   )
// }

// export default Navbar