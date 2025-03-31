import React from 'react';
import Card from './AboutCompo/Card';

function Project() {
  return (
    <>
      <div className='max-w-screen-2xl container ml-6 mx-auto px-4 md:px-20 my-10 text-white'>
        <h1 className='text-6xl font-bold text-center shadow-lg shadow-green-500'>
          <span className=' text-green-500'>My</span> Work
        </h1>
        <div className='px-7 py-20 bg-gray-950 rounded-md my-20'>
          <div className="flex flex-wrap justify-center gap-10">
            <Card
              image="./image1.jpg"
              title="Ecommerce"
              link='https://saloni-shukla78.github.io/Ecommerce/'
            />
            <Card
              image="./image2.jpg"
              title="Expense-Tracker"
              link='https://saloni-shukla78.github.io/Expense-tracker/'
            />
            <Card
              image="./image3.png"
              title="Calculator"
              link="https://saloni-shukla78.github.io/Calculator/"
            />
            <Card
              image="./image4.jpg"
              title="Netflix-Clone"
              link="https://saloni-shukla78.github.io/Netflix-Clone/"
            />
            <Card
              image="./image5.jpg"
              title="Rock-Paper-Scissor"
              link="https://saloni-shukla78.github.io/Rock-Paper-Scissor/"
            />
            <Card
              image="./image6.jpg"
              title="My-Portfolio"
              link="https://saloni-shukla78.github.io/My-Portfolio-/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
