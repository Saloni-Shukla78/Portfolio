import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import ContactForm from './AboutCompo/ContactForm';

function Contact() {
  return (
    <>
    <div className ="max-w-screen-2xl container ml-6 mx-auto px-4 md:px-20 my-10 text-white">
    <h1 className='text-6xl font-bold text-center shadow-lg shadow-green-500'>Contact <span className=' text-green-500'>Me</span></h1>
    <div className='flex flex-col md:flex-row md:mt-12'>
        <div className='md:w-1/2 mt-12 md:mt-20 order-1'>
            
            <div className='flex flex-col items-center justify-center mt-5'>
                <ContactForm/>
                {/* <form action="" className='bg-slate-700 w-96 px-4 py-7 rounded-xl'>
                <h1 className='text-xl  font-semibold mb-4 text-green-400'>Send Your Message</h1>
                    <div className='flex flex-col mb-5'>
                        <label className='block text-white'>Full Name:</label>
                        <input className='shadow appearance-none border rounded py-2 px-3 my-2 text-gray-700 leading-tight  ' id="name" type="text" placeholder='Enter your full name'></input>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='block text-white'>Email Id:</label>
                        <input className='shadow appearance-none border rounded py-2 px-3 my-2 text-gray-700 leading-tight ' id="name" type="email" placeholder='Enter your Email'></input>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='block text-white'>Message:</label>
                        <textarea className='shadow appearance-none border rounded py-2 px-3 my-2 text-gray-700 leading-tight ' id="name" type="text" placeholder='Enter your Message......'></textarea>
                    </div>
                    <button className='bg-green-500 text-white rounded-xl px-4 py-2 hover:bg-slate-900'> Send</button>
                </form> */}
            </div>

        </div>
        <div className='md:w-1/2 mt-12 md:mt-20 order-2'>
            <h3 className='text-3xl font-bold m-6 text-center text-green-400'>My Contact Details</h3>
            <div className='flex flex-col space-y-5 mx-2 my-10 p-7 '>
                <div className='flex flex-col justify-between items-center md:flex-row'>
                    <p className='text-lg md:font-bold font-normal'>Location :</p>
                    <p className='md:text-lg md:font-bold font-normal text-sm'>Lucknow,Uttar Pradesh</p>
                    </div>
                <div className='flex flex-col justify-between items-center md:flex-row '>
                    <p className='text-lg md:font-bold font-normal'>Email :</p>
                    <p className=' md:text-lg md:font-bold font-normal text-sm'>salonishukla875@gmail.com</p>
                    </div>
                <div className='flex flex-col justify-between items-center md:flex-row '>
                    <p className='text-lg md:font-bold font-normal'>Phone :</p>
                    <p className=' md:text-lg md:font-bold font-normal text-sm'> +91 6393396933</p>
                    </div>
                    <div className='flex flex-col justify-between items-center md:flex-row '>
                    <p className='text-lg md:font-bold font-normal'>Education :</p>
                    <p className=' md:text-lg md:font-bold font-normal text-sm'> Maharishi University,Lucknow</p>
                    </div>
                <div className=''>
                <ul className='flex space-x-6 justify-center items-center mt-5'>
            <li>{" "}
            <a href='https://www.linkedin.com/in/saloni-shukla-3376672a5' target="_blank"><FaLinkedin className='text-xl cursor-pointer text-white md:text-3xl'/></a>
            </li>
            <li>{" "}
            <a href="https://t.me/Saloni63" target="_blank">
            <BsTelegram className='text-xl cursor-pointer text-white md:text-3xl'/>
            </a>
            </li>
            <li>{" "}
            <a href='' target="_blank"><FaInstagramSquare className='text-xl cursor-pointer text-white md:text-3xl'/></a>
            </li>
            <li>{" "}
            <a href="https://github.com/Saloni-Shukla78" target="_target">
            <IoLogoGithub className='text-xl cursor-pointer text-white md:text-3xl'/>
            </a>
            </li>

          </ul>
                </div>

            </div>

        </div>

    </div>

    </div>
    </>
  )
}

export default Contact