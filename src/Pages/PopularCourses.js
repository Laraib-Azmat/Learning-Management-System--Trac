import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import dummydata from '../Components/Dummydata';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PopularCourses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const numberOfCourses = 4; // Number of courses to show at a time

  const totalSlides = Math.ceil(dummydata.length / numberOfCourses);

  // Add extra slides for the seamless effect
  const extendedDummyData = [
    ...dummydata.slice(-numberOfCourses),
    ...dummydata,
    ...dummydata.slice(0, numberOfCourses)
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change courses every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          setCurrentIndex(totalSlides);
        } else if (currentIndex === totalSlides + 1) {
          setCurrentIndex(1);
        }
      };

      sliderRef.current.addEventListener('transitionend', transitionEndHandler);

      return () => {
        sliderRef.current.removeEventListener('transitionend', transitionEndHandler);
      };
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section id='popular' className="pt-20 bg-white">
      <div className="mx-auto">
        <h2 className="py-4 mb-10 text-2xl font-bold text-center md:text-3xl" style={{
          background: "linear-gradient(to right, rgba(61, 228, 250, 0.8), rgba(51, 192, 253, 0.8), rgba(57, 212, 233, 0.8), rgba(52, 198, 247, 0.8))"
        }}>
          <span className="text-red-500">Popular</span> Courses
        </h2>

        <div className="flex items-center justify-between px-2 md:px-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 text-white bg-black rounded-full hover:bg-gray-300 hover:text-black flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className={`flex gap-5 transition-transform duration-500 ease-in-out ${isTransitioning ? '' : 'transition-none'}`}
              style={{ transform: `translateX(-${(currentIndex + 1) * (100 / numberOfCourses)}%)` }}
              ref={sliderRef}
            >
              {extendedDummyData.map((course, index) => (
                <Link onClick={() => window.scrollTo(0, 0)} to={`/coursedetails/${course.id}`} key={index} className="min-w-[25%]">
                  <div
                    className="bg-white border border-black rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col h-full"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <h3 className="mt-4 mb-2 text-xl font-semibold text-center">
                      {course.title}
                    </h3>
                    <p className="mb-4 text-center text-gray-500 flex-1">
                      BY: {course.author}
                    </p>
                    <div className="flex justify-end mb-2 text-end">
                      <Link onClick={() => window.scrollTo(0, 0)} to={`/course/${course.id}`}>
                        <span className='text-xs cursor-pointer hover:underline hover:text-blue-900 '>Learn more<ArrowRightIcon></ArrowRightIcon></span>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 text-white bg-black rounded-full font-bold hover:bg-gray-300 hover:text-black flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-px mb-4 bg-black"></div>
          <button className="px-4 py-2 text-sm font-bold bg-cyan-200 hover:bg-gray-300">
            <Link to={"/course"}>
              See All Courses
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
