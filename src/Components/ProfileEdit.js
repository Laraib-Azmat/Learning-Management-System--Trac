import React, { useState } from 'react';
import uploadimage from "../Assests/download.png";

export default function ProfileEdit() {
  const [selectedImage, setSelectedImage] = useState(uploadimage);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'User XYZ',
    email: 'user@gmail.com',
    password: 'pakistan'
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log('Saved:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Optionally reset formData to initial state
    setIsEditing(false);
  };

  return (
    <section className="p-6 bg-gray-100 min-h-[75vh]">
      <div className="flex items-center justify-evenly">
        <div
          className="flex flex-col items-center justify-center w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
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
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="text-center mb-6" style={{ marginLeft: "0rem" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">My Profile</h2>
            <hr className="border-gray-300" />
            <div className='flex gap-2'>
              <h2 className="text-md sm:text-lg font-medium">Name</h2>
              {isEditing ? (
                <input
                  className="text-gray-700 mt-5 border border-gray-300 rounded-md p-2"
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="text-gray-700 mt-5">{formData.name}</p>
              )}
            </div>
            <div className='flex gap-2'>
              <h2 className="text-md sm:text-lg font-medium">Email</h2>
              {isEditing ? (
                <input
                  className="text-gray-700 mt-5 border border-gray-300 rounded-md p-2"
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="text-gray-700 mt-5">{formData.email}</p>
              )}
            </div>
            <div className='flex gap-2'>
              <h2 className="text-md sm:text-lg font-medium">Password</h2>
              {isEditing ? (
                <input
                  className="text-gray-700 mt-5 border border-gray-300 rounded-md p-2"
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="text-gray-700 mt-5">••••••••</p>
              )}
            </div>
            {isEditing ? (
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <a
                href="#edit"
                className="text-blue-500 underline mt-4 block text-right"
                onClick={() => setIsEditing(true)}
              >
                Edit Info
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
