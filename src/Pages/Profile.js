import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummydata from '../Components/Dummydata';
import uploadimage from "../Assests/download.png";

export default function UserProfile() {
  const shuffleArray = (array) => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [visibleCourses, setVisibleCourses] = useState([]);
  const [selectedImage, setSelectedImage] = useState(uploadimage);

  const updateVisibleCourses = () => {
    const screenWidth = window.innerWidth;
    const numberOfCourses = screenWidth < 768 ? 1 : 2;
    setVisibleCourses(shuffleArray(dummydata).slice(0, numberOfCourses));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    updateVisibleCourses();
    window.addEventListener("resize", updateVisibleCourses);
    return () => window.removeEventListener("resize", updateVisibleCourses);
  }, []);

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-evenly ">
        <div
          className="flex flex-col items-center justify-center w-20 h-20 sm:w-40 sm:h-40  rounded-full bg-gray-200 overflow-hidden cursor-pointer"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
            
          />
          <img
            src={selectedImage}
            alt=""
            className="object-cover w-full h-full"
          />
         
        </div>

        <div className="p-6">
          <div className="text-center mb-6" style={{ marginLeft: "0rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">My Profile</h2>
            <hr className="border-gray-300" />
            <div className='flex gap-2'>
              <h2 className="text-md sm:text-lg font-medium">Name</h2>
              <p className="text-gray-700 mt-5">User XYZ</p>
            </div>
            <div className='flex gap-2'>
              <h2 className="text-md sm:text-lg font-medium">Email</h2>
              <p className="text-gray-700 mt-5">user@gmail.com</p>
            </div>
            <a
              href="#edit"
              className="text-blue-500 underline mt-4 block text-right"
            >
              Edit Info
            </a>
          </div>
        </div>
      </div>

      <section className="p-6 bg-gray-100">
  <div className="max-w-full p-2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="border-l-4 border-gray-300 pl-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Involved In</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-black rounded-lg shadow-md w-64 lg:w-55 flex-shrink-0"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-32 rounded-t-lg"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">
                  {course.title}
                </h3>
                <p className="text-center text-gray-500">BY: {course.author}</p>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-4 border-gray-300 pl-4">
          <h2 className="text-xl font-semibold mb-2">For You</h2>
          <div className="flex  lg:flex-row space-x-4 overflow-x-auto scrollbar">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-black rounded-lg shadow-md w-64 flex-shrink-0"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-32 rounded-t-lg"
                />
                <h3 className="mt-2 text-lg font-semibold text-center">
                  {course.title}
                </h3>
                <p className="text-center text-gray-500">BY: {course.author}</p>
                <div className="flex justify-center mt-2 mb-2">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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
