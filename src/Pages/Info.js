import React from 'react';
import missionImg from '../Assests/our-Mission-Vision.jpg'

export default function Info() {
  return (
    <section id='about' className="py-20 bg-silver-100">
      
    <div className="mx-auto   ">
      <div className="flex px-20 md:px-20 md:gap-70 vision-container ">
        <div className="pt-4 md:w-2/3">
          <h3 className="py-4 text-xl font-bold ">Our Mission & Vision</h3>
          <span
            className="block w-[300px] h-px  bg-gray-700"
            aria-hidden="true"
          ></span>
          <p className="py-4 text-xl">
            Our Mission is make hight quality education, accessible to
            everyone, everywhere.
          </p>
          <p className="py-4 text-xl">
            We envision a World where learning is a lifelong journey and
            opportunities for growth are available to all.
          </p>
        </div>
        <div className="" style={{marginLeft:"8 rem"}}>
          <img
            src={missionImg}
            className="w-[350px] mt-8 ml-32 sm:ml-8 md:ml-2 sm:mx-auto sm:mt-4"
            
            alt="Trac Logo"
          />
        </div>
      </div>
      <p className="px-20 py-4 text-xl md:px-20">
        We combine cutting-edge technology with industry expertise to deliever
        engaging, interactive and affective learning experiences.Our courses
        are designed with the learner in mind, offering flexibility and
        support every step of the way.
      </p>
      
    </div>
  </section>
  )
}
