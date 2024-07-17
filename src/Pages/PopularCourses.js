import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummydata from '../Components/Dummydata';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function PopularCourses() {

    const shuffleArray = (array) => {
        let newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };

      const [visibleCourses, setVisibleCourses] = useState([]);

  const updateVisibleCourses = () => {
    const screenWidth = window.innerWidth;
    const numberOfCourses = screenWidth < 768 ? 1 : 4;
    setVisibleCourses(shuffleArray(dummydata).slice(0, numberOfCourses));
  };

  useEffect(() => {
    updateVisibleCourses();
    window.addEventListener("resize", updateVisibleCourses);
    return () => window.removeEventListener("resize", updateVisibleCourses);
  }, []);

  const handleShuffle = () => {
    updateVisibleCourses();
  };

  return (
    <section id='popular' className="pt-20 bg-white ">
      <div className="mx-auto ">
        <h2 className="py-4 mb-10 text-2xl font-bold text-center md:text-3xl" style={{
    background: "linear-gradient(to right, rgba(61, 228, 250, 0.8), rgba(51, 192, 253, 0.8), rgba(57, 212, 233, 0.8), rgba(52, 198, 247, 0.8))"
  }}>
          <span className="text-red-500"> Popular</span> Courses
        </h2>

        <div className="flex items-center justify-between px-2 md:px-8">
          <button
            onClick={handleShuffle}
            className="w-10 h-10 text-white bg-black rounded-full hover:bg-gray-300 hover:text-black"
          >
            {"<"}
          </button>

          <div className="grid grid-cols-1 gap-8 px-3.5 md:grid-cols-2 xl:grid-cols-4 md:px-4">
           {visibleCourses.map((course) => (
              <Link onClick={()=>window.scrollTo(0,0)} to={`/coursedetails/${course.id}`} key={course.id} >
              <div
                key={course.id}
                className="bg-white border border-black rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 "
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-48 rounded-t-lg "
                />
                <h3 className="mt-4 mb-2 text-xl font-semibold text-center">
                  {course.title}
                </h3>
                <p className="mb-4 text-center text-gray-500">
                  BY: {course.author}
                </p>
                <div className="flex justify-end">
                <Link onClick={()=>window.scrollTo(0,0)} to={`/course/${course.id}`}><span className='text-xs cursor-pointer'>Learn more<ArrowRightIcon></ArrowRightIcon></span></Link>
                </div>
              </div>
              </Link>
            ))}
          </div>
          <button
            onClick={handleShuffle}
            className="w-10 h-10 text-white bg-black rounded-full hover:bg-gray-300 hover:text-black"
          >
           {">"}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-px mb-4 bg-black"></div>
          <button className="px-4 py-2 text-sm font-bold bg-cyan-200 hover:bg-gray-300">
          <Link
                            to={"/course"}
                            
                        >
                            See All Courses
                        </Link>
            
          </button>
        </div>
      </div>
    </section>
  )
}
