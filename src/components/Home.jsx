import React from 'react'
import { ReactTyped} from "react-typed";
import pic from "../assets/saloni_3.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

function Home() {
  return (
    <>
    <div className ="max-w-screen-2xl container ml-6 mx-auto px-4 md:px-20 my-10 text-white">
        <div className='flex flex-col md:flex-row md:mt-16'>
        <div className="md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
        <p className='mb-4 tracking-wider text-lg'>Welcome, In My Feed</p>
        <div className='flex space-x-2 text-4xl md:text-5xl'>
        <h1>Hello, I'm  </h1><br/>
        {/*<span className='text-green-900 font-bold'> Saloni</span>*/}
        <div>
        <ReactTyped
          className='text-green-700 font-bold'
          strings={[" Saloni"," Student"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        </div><br/>
        <p className='text-sm md:text-lg text-justify tracking-wider leading-loose '>I'm a B.Tech student at Maharishi University Of Information Technology. With a strong foundation in computer science and a interest in web technologies, I have honed my skills in front-end development.</p>
        <br/>
        {/* social media */}
        <div className='space-y-3'>
          <h1 className='font-semibold text-xl md:text-3xl text-green-400 '> Available On </h1>
          <ul className='flex space-x-8'>
          <li>{" "}
          <a href="https://github.com/Saloni-Shukla78" target="_target" rel="">
            <IoLogoGithub className='text-xl cursor-pointer text-white md:text-3xl'/>
            </a>
            </li>
            <li>{" "}
            <a href="https://www.linkedin.com/in/saloni-shukla-3376672a5 " target="_target">
            <FaLinkedin className='text-2xl cursor-pointer text-white md:text-3xl '/>
            </a>
            </li>
            <li>{" "}
            <a href="https://t.me/Saloni63" target="_blank">
            <BsTelegram className='text-2xl cursor-pointer text-white md:text-3xl'/>
            </a>
            </li>
            

          </ul>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-48  mt-5 order-1 mx-auto">
        <img src={pic} alt="Saloni Image" className='rounded-full md:w-[450px] h-[480px] shadow-2xl shadow-green-600 z-50'></img>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home