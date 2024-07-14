import React from 'react';
import expertIcon from "../Assests/expert-inst.png";
import coursesIcon from '../Assests/courses-variety.png';
import learningIcon from "../Assests/flexible-learning.png";
import contentIcon from "../Assests/interactive-content.png";
import certificateIcon from "../Assests/certification.png";
import robortImg from "../Assests/ROBOT.png";

export default function ChooseUs() {
  const features = [
    "Expert Instructors",
    "Variety of Courses",
    "Flexible Learning",
    "Interactive Content",
    "Certification"
  ];

  const descriptions = [
    "Learn from industry leaders and professionals. Gain more Experience and get the guidance.",
    "Access courses across various subjects and skill levels.",
    "Study at your own pace, anytime, anywhere.",
    "Engage with multimedia content, quizzes, and assignments.",
    "Earn certificates upon course completion to showcase your skills."
  ];

  const courseIcons = [
    expertIcon, coursesIcon, learningIcon, contentIcon, certificateIcon
  ];

  return (
    <section id='chooseus' className="bg-white ">
      <div className="mx-auto " style={{
    background: "linear-gradient(to right, rgba(61, 228, 250, 0.8), rgba(51, 192, 253, 0.8), rgba(57, 212, 233, 0.8), rgba(52, 198, 247, 0.8))"
  }}>
        <img
          src={robortImg}
          alt="Logo"
          className="absolute md:right-32 lg:right-60 w-28 h-28 choose-img"
        />

        <h2 className="p-4 mb-10 text-2xl font-bold text-center md:text-3xl ">
          Why Choose Us?
        </h2>

      </div>
      <div className="flex flex-wrap justify-center gap-6 px-2 md:gap-10 md:px-8 lg:gap-12 mb-8">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="flex flex-col  w-[350px] h-[220px] bg-[#EEEEEE] rounded-lg rounded-t-2xl shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex items-center p-4 mb-4 rounded-t-2xl " style={{
              background: "linear-gradient(to bottom, rgba(94, 213, 245, 0.8), rgba(55, 131, 246, 0.8))"
            }}>
              <span className="mr-2 text-2xl material-icons">
                <img
                  src={courseIcons[index]}
                  alt="Logo"
                  className="w-10 h-10 "
                />
              </span>
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
            <p className="p-4 text-black ">{descriptions[index]}</p>
          </div>
        ))}
     

      </div>
      <div className="flex flex-wrap justify-center gap-6 px-2 md:gap-10 md:px-8 lg:gap-12">
        {features.slice(3, 6).map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[350px] h-[220px] bg-[#EEEEEE] rounded-lg rounded-t-2xl shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex items-center p-4 mb-4 rounded-t-2xl " style={{
              background: "linear-gradient(to bottom, rgba(94, 213, 245, 0.8), rgba(55, 131, 246, 0.8))"
            }}>
              <span className="mr-2 text-2xl material-icons">
                <img
                  src={courseIcons[index]}
                  alt="Logo"
                  className="w-10 h-10"
                />
              </span>
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
            <p className="p-4 text-black">{descriptions[index]}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
