import React from 'react';
import dummydata from '../Components/Dummydata';

const CoursesSection = () => {
  const shuffleArray = (array) => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [visibleCourses, setVisibleCourses] = React.useState([]);

  React.useEffect(() => {
    const updateVisibleCourses = () => {
      const screenWidth = window.innerWidth;
      const numberOfCourses = screenWidth < 768 ? 1 : 2;
      setVisibleCourses(shuffleArray(dummydata).slice(0, numberOfCourses));
    };

    updateVisibleCourses();
    window.addEventListener("resize", updateVisibleCourses);
    return () => window.removeEventListener("resize", updateVisibleCourses);
  }, []);

  return (
    <section className="p-6 bg-gray-100 min-height-screen">
      <div className="max-w-full p-2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 text-center">Courses</h2>
        <div className="flex flex-col">
          <div className="border-l-4 border-gray-300 pl-4 mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2">Involved In</h2>
            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-row space-x-4 lg:space-x-8 overflow-x-auto scrollbar">
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-300 rounded-lg shadow-md w-64 lg:w-72 flex-shrink-0 mb-4 lg:mb-0"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-32 lg:h-48 rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center lg:text-left">
                      {course.title}
                    </h3>
                    <p className="text-center lg:text-left text-gray-500">BY: {course.author}</p>
                    <div className="flex justify-center lg:justify-start mt-2">
                      <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h2 className="text-xl font-semibold mb-2">For You</h2>
            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-row space-x-4 lg:space-x-8 overflow-x-auto scrollbar">
              {visibleCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-300 rounded-lg shadow-md w-64 lg:w-72 flex-shrink-0 mb-4 lg:mb-0"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-32 lg:h-48 rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center lg:text-left">
                      {course.title}
                    </h3>
                    <p className="text-center lg:text-left text-gray-500">BY: {course.author}</p>
                    <div className="flex justify-center lg:justify-start mt-2">
                      <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-px mb-4 bg-black"></div>
          <button className="px-4 py-2 text-sm font-bold bg-cyan-200 hover:bg-gray-300">
            See All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
