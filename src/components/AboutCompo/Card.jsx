import React from 'react';
import { IoLogoGithub } from "react-icons/io";

const Card = ({ image, title , link}) => { 
  return (
    <>
    <div className="max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
    <div className="relative group aspect-video">
  <img src={image} alt="Image" className="w-full h-full object-cover rounded-t-lg opacity-100 transition duration-300 group-hover:scale-105 "/>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 group-hover:bg-black/70">
    <div className="relative"> 
    <div className="absolute inset-0 rounded-full w-16 h-16 -z-10 group-hover:scale-110 transition duration-300"></div> <a href={link} target="_target">
    <IoLogoGithub className='text-xl cursor-pointer text-white md:text-5xl font-bold'/>
    </a>  </div>
  </div>
</div>



      {/*<img className="w-full rounded-t-lg opacity-100 hover:opacity-50" src={image} alt="Card image" />
      <div className="px-6 py-4 flex space-x-2">
        {/*<h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">{title}</h2> 
        <a href={link1} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Click to see
        </a> 
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        View on GitHub</a> 
      </div> */}
    </div>
    </>
  );


  

};

export default Card;




