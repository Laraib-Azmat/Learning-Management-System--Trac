import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dummydata from "../Components/Dummydata";
import Certificate from "../Components/Certificate";
import authorImage from "../Assests/author.jpeg";

import {
  FaVideo,
  FaCheckCircle,
  FaCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const CourseDetail = () => {
  const { id } = useParams();
  const course = dummydata.find((course) => course.id === parseInt(id));
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("CourseCurriculum");
  const [authorTab, setAuthorTab] = useState("Profile");

 
  if (!course) {
    return <div>Course not found</div>;
  }

  const renderAuthorContent = () => {
    switch (authorTab) {
      case "Profile":
        return (
          <div>
            Michael Taggart is a career technologist and educator, with over a
            decade of experience building software and IT systems and training
            others how to do the same. Currently a Senior Cybersecurity Analyst
            for UCLA Health, Taggart spends his days hunting and emulating
            threat actors. At night, he streams cybersecurity content on Twitch.
            Before pivoting to infosec, he had worked as a computer science
            instructor, contract web developer, and Director of Technology for
            multiple schools. 
          </div>
        );
      case "ContactInfo":
        return (
          <div>
            <b>Twitter: </b>
            <a target="blank" href="https://twitter.com/mttaggart">
              {" "}
              https://twitter.com/mttaggart{" "}
            </a>{" "}
            <br />
            <b>Twitch:</b>{" "}
            <a target="blank" href=" https://twitch.tv/mttaggart">
              {" "}
              https://twitch.tv/mttaggart{" "}
            </a>{" "}
            <br />
            <b>YouTube: </b>
            <a target="blank" href="https://youtube.com/taggarttech">
              {" "}
              https://youtube.com/taggarttech{" "}
            </a>{" "}
            <br />
            <b>GitHub: </b>
            <a target="blank" href="https://github.com/mttaggart">
              {" "}
              https://github.com/mttaggart{" "}
            </a>{" "}
            <br />
            <b>Blog: </b>
            <a target="blank" href="https://taggart-tech.com">
              {" "}
              https://taggart-tech.com{" "}
            </a>{" "}
            <br />
            <b>Mastodon:</b>{" "}
            <a target="blank" href="https://infosec.exchange/@mttaggart">
              {" "}
              https://infosec.exchange/@mttaggart{" "}
            </a>{" "}
            <br />
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "CourseCurriculum":
        return (
          <div>
            <h3 className="text-xl font-bold mb-2">Course Curriculum</h3>
            <div className="flex items-center mb-4">
              <div className="h-5 bg-gray-300 w-full">
                <div
                  className="h-full bg-blue-400"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <button className="ml-2 px-2 py-1 bg-blue-500 text-white">
                Continue
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">0: Intro</h3>
            <ul className="list-none">
              {course.curriculum.map((lesson, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                >
                  {lesson.completed ? (
                    <FaCheckCircle className="text-green-500 ml-2 mr-4" />
                  ) : (
                    <FaCircle className="text-gray-300 ml-2 mr-4" />
                  )}
                  <FaVideo className="mr-2" />
                  <span className="flex-1">
                    {lesson.title} ({lesson.duration})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "Author":
        return (
          <div className="flex flex-col md:flex-row">
            <img
              src={authorImage}
              className="w-full md:w-1/3 h-full mb-4 md:mb-0"
              alt="Author"
            />
            <div className="md:ml-4">
              <div className="flex">
                <button
                  className={`py-2 px-4 font-bold bg-gray-100 ${
                    authorTab === "Profile" ? "bg-gray-300 text-red-600" : ""
                  }`}
                  onClick={() => setAuthorTab("Profile")}
                >
                  Profile
                </button>
                <button
                  className={`py-2 px-4 font-bold bg-gray-100 ${
                    authorTab === "ContactInfo"
                      ? "bg-gray-300 text-red-600"
                      : ""
                  }`}
                  onClick={() => setAuthorTab("ContactInfo")}
                >
                  Contact Info
                </button>
              </div>
              <div className="mt-4">{renderAuthorContent()}</div>
            </div>
          </div>
        );
      case "Certificate":
        return (
          <div style={{ marginTop: "-8rem", width: "100%", height: "40rem" }}>
            <Certificate />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {sidebarOpen && (
        <div
          className={`w-full md:w-64 p-4 bg-gray-200 `}
          style={{ height: "100vh" }}
        >
          <img
            src={course.image}
            className="w-full h-auto mb-4"
            alt={course.title}
          />
          <h2 className="text-xl font-bold mb-2">{course.title}</h2>
          <div className="mb-4">
            <div className="h-2 bg-gray-300">
              <div
                className="h-full bg-green-500"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p className="text-right text-sm">80% completed</p>
          </div>
          <hr className="my-6" />
          <div className="bg-white">
            <div className="flex flex-col w-full">
              <button
                className={`py-2 px-4 text-left font-bold ${
                  activeTab === "CourseCurriculum"
                    ? "bg-gray-300 text-red-600"
                    : ""
                }`}
                onClick={() => setActiveTab("CourseCurriculum")}
              >
                Course Curriculum
              </button>
              <button
                className={`py-2 px-4 text-left font-bold ${
                  activeTab === "Author" ? "bg-gray-300 text-red-600" : ""
                }`}
                onClick={() => setActiveTab("Author")}
              >
                Author
              </button>
              <button
                className={`py-2 px-4 text-left font-bold ${
                  activeTab === "Certificate" ? "bg-gray-300 text-red-600" : ""
                }`}
                onClick={() => setActiveTab("Certificate")}
              >
                Certificate
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex-1 p-4 `}
        style={{ height: "100vh" }}
      >
        <button
          className="mb-4 px-4 py-4 bg-blue-500 text-white"
          style={{ marginLeft: "-1rem", marginTop:"-1rem" }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CourseDetail;
