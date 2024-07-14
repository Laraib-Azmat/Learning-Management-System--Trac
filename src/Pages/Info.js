import React from 'react';
import missionImg from '../Assests/our-Mission-Vision.jpg'

export default function Info() {
  return (
    <section id='about' className="py-20 bg-silver-100">
      <div className="mx-auto   ">
      <h2 className="py-4 mb-10 text-3xl font-bold text-center" style={{
    background: "linear-gradient(to right, rgba(61, 228, 250, 0.8), rgba(51, 192, 253, 0.8), rgba(57, 212, 233, 0.8), rgba(52, 198, 247, 0.8))"
  }}>
        <span className="text-red-500"> About</span> Us
      </h2>
      <div className="flex flex-col md:flex-row  px-4 md:px-20 gap-4 md:gap-8 vision-container">
  <div className="pt-4 md:w-2/3">
    <h3 className="py-4 text-xl font-bold">Our Mission & Vision</h3>
    <span className="block w-[300px] h-px bg-gray-700" aria-hidden="true"></span>
    <p className="py-4 text-xl">
      Our Mission is to make high quality education accessible to everyone, everywhere.
    </p>
    <p className="py-4 text-xl">
      We envision a world where learning is a lifelong journey and opportunities for growth are available to all.
    </p>
  </div>
  <div className="md:ml-8">
    <img
      src={missionImg}
      className="w-[350px] mt-8 sm:mx-auto sm:mt-4"
      alt="Trac Logo"
    />
  </div>
</div>
      <p className="px-15 py-4 text-xl md:px-15">
        We combine cutting-edge technology with industry expertise to deliever
        engaging, interactive and affective learning experiences.Our courses
        are designed with the learner in mind, offering flexibility and
        support every step of the way.
      </p>
      <div className="flex ">
        <div className="flex flex-col justify-end py-2 ml-auto mr-8 font-bold">
          <a href="/info" className="">
            More About Us
          </a>
          <span
            className="block w-[120px] h-px mt-2 bg-gray-700"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </div>
  </section>
  )
}
