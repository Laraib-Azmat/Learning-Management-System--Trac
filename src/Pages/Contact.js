import React, { useState } from 'react';
import askus from '../Assests/ask-us.png';
import contactImg from '../Assests/contact-us.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setShowModal(false); // Close modal after clearing
  };

  const handleClearClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id='contact' className="relative py-20 bg-white">
      <div className="relative mx-auto">
        <h2 className="py-4 mb-10 text-2xl font-bold text-center md:text-3xl" style={{
          background: "linear-gradient(to right, rgba(61, 228, 250, 0.8), rgba(51, 192, 253, 0.8), rgba(57, 212, 233, 0.8), rgba(52, 198, 247, 0.8))"
        }}>
          <span className="text-red-500">Contact</span> Us
        </h2>
        <div className="absolute flex items-center justify-center transform -translate-y-1/2 contact-img left-4 top-1/2 hidden lg:flex">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-48 h-48"
          />
        </div>
        <form className="max-w-lg p-8 mx-auto border bg-gray-200 border-black rounded-lg">
          <h2 className="py-2 my-2 text-center font-bold">Send Us a Message!</h2>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-lg"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Here..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-black rounded-lg"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message Here...."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="px-6 py-2 mr-4 text-white bg-red-500 rounded-lg hover:bg-black hover:text-white"
              type="button"
              onClick={handleClearClick}
            >
              Clear
            </button>

            <button
              className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-black hover:text-white"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <div className="absolute right-0 transform rotate-45 top-5 md:top-28 md:right-2 lg:right-10 hidden lg:flex">
          <img
            src={askus}
            alt="Ask Us"
            className="w-50 h-20"
          />
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Are you sure you want to clear the form?</h2>
            <div className="flex justify-end">
              <button
                className="px-6 py-2 mr-4 text-white bg-red-500 rounded-lg hover:bg-black hover:text-white"
                onClick={handleClear}
              >
                Yes
              </button>
              <button
                className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-black hover:text-white"
                onClick={handleCloseModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
