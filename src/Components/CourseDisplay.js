import React, { useState } from 'react'
import dummydata from './Dummydata'
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CourseDisplay = () => {

    const [visibleCourses, setVisibleCourses] = useState(8);

    const handleLoadMore = () => {
      setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 8);
    };
  

  return (
    <div className=' flex flex-col gap-10 items-center'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>

            {dummydata.slice(0, visibleCourses).map((course, i)=>{
                return <Link onClick={()=>window.scrollTo(0,0)} to={`/coursedetails/${course.id}`} key={course.id} >
                <div
                  key={course.id}
                  className=" relative bg-white border border-black rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 h-[100%] flex flex-col"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-48 rounded-t-lg "
                  />
                  <h3 className="mt-4 mb-2 text-xl font-semibold text-center">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-center text-gray-500 flex-1">
                    BY: {course.author}
                  </p>
                  <div className="flex justify-end mb-2 text-end">
                  <Link onClick={()=>window.scrollTo(0,0)} to={`/course/${course.id}`}><span className='text-xs cursor-pointer hover:underline hover:text-blue-900 '>Learn more<ArrowRightIcon></ArrowRightIcon></span></Link>
                  </div>
                </div>
                </Link>
            })}
        </div>

        {visibleCourses < dummydata.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-300 border border-gray-500 font-bold px-2 sm:px-6 py-2 rounded-lg shadow hover:bg-gray-500 text-sm md:text-md"
          >
            See More
          </button>
        </div>
      )}
    </div>
  )
}

export default CourseDisplay