import React from 'react';
import background from '../Assests/background.png';
import About from './About';
import Contact from './Contact';
import ChooseUs from './ChooseUs';
import PopularCourses from './PopularCourses';

export default function Home() {
  return (
    <>
      <section
      id='home'
        className="relative h-screen md:h-[85vh] lg:h-[90vh] xl:h-[90vh] bg-center bg-cover flex items-center p-5 md:p-10 lg:p-16 xl:p-20 "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative flex flex-col justify-center h-full px-4 md:w-3/2 gap-6 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Unlock Your Potential <br />
            <span>with Expert-Led Online Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Flexible Learning for Every Schedule
            <span className="block w-60 h-1 mt-4 bg-white"></span>
          </p>
          <a
            href="#about"
            className="px-4 py-3 md:py-4 w-[240px] text-white bg-black rounded-lg font-bold text-lg md:text-xl shadow-lg hover:scale-105 transition-all duration-300 text-center"
            style={{ boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.8)' }}
          >
            Get Started <span className="text-red-700">Today!</span>
          </a>
        </div>
      </section>

      <ChooseUs />
      <PopularCourses/>
      <About />
      <Contact />
    </>
  );
}
