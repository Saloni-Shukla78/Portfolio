import React from 'react'
import { TbH4 } from 'react-icons/tb';
import Timeline from './AboutCompo/Timeline';
import Skill from './AboutCompo/Skill';

function About () {
  return (
    <>
    <div className='max-w-screen-2xl container ml-6 mx-auto px-4 md:px-20 my-10 text-white'>
        <h1 className='text-6xl font-bold text-center shadow-lg shadow-green-500'>About <span className=' text-green-500'>Me</span></h1>
        <div className='flex flex-col h-1/2 gap-16'>
        <div className='flex flex-col md:flex-row mt-12 gap-16'>
          <div className="md:w-1/2 mt-12 md:mt-16">
          <h1 className='text-3xl font-bold m-5 text-center md:text-4xl'>Intro</h1>
          <p className='text-sm md:text-lg text-justify tracking-wider leading-loose px-10 '>I am Saloni Shukla, a BTech Computer Science student with a passion for coding, problem-solving, and innovative technology. With expertise in software development, algorithms, and web technologies, I constantly explore new advancements to enhance my skills. Passionate about AI and software engineering, I enjoy solving complex challenges through efficient coding. My goal is to create impactful solutions that drive technological advancements and improve user experiences, contributing to the ever-evolving tech industry with creativity and dedication.</p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-16">
            <h2 className='text-3xl font-bold m-5 text-center md:text-4xl'>My Skills</h2>
            <Skill sub="HTML5" mark="90%" progress="90"/>
            <Skill sub="CSS" mark="85%" progress="85"/>
            <Skill sub="JavaScript" mark="80%" progress="80"/>
            <Skill sub="React JS" mark="70%" progress="70"/>
            <Skill sub="Java" mark="75%" progress="75"/>
            <Skill sub="Python" mark="70%" progress="70"/>
          </div>
        </div>
        <hr className='bg-gray-500 h-1'></hr>
        <div className='w-full'>
        <h2 className='text-3xl font-bold m-5 text-center md:text-4xl'>My Education</h2>
        <div className=' my-14 px-10 py-20 bg-gray-950 rounded-md'>
          <Timeline/>
        </div>
        </div>
        </div>
       
        
        
    </div>
    </>
    
  )
}

export default About;