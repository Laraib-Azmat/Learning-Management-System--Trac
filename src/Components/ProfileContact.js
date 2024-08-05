import React, { useState } from 'react';

const ProfileContact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 p-6'>
      <div className='w-full max-w-lg bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold mb-6 text-gray-900'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your email address'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your message'
              rows='4'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileContact;
