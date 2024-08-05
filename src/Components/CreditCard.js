import React, { useState } from 'react';
import visaIcon from "../Assests/visaIcon.svg";

const CreditCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    monthYear: '',
    code: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    zipCode: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    // Handle save logic here (e.g., API call)
    setIsEditing(false);
  };

  return (
    <div className='h-screen flex flex-col items-center justify-start p-5 gap-10 overflow-auto bg-gray-100'>
      <div className='bg-white  rounded-lg shadow-md p-5 w-full max-w-4xl'>
        <div className='flex w-full justify-between'>
        <p className='text-xl font-semibold mb-4'>Card Information</p>
        <img src={visaIcon} className='w-12 h-12' alt="Visa Icon" /></div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col w-full'>
              <label className='text-gray-600 text-sm'>
                Card Number
                <input
                  type='number'
                  name='cardNumber'
                  placeholder='0000 0000 0000 0000'
                  className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
                  value={cardInfo.cardNumber}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </label>
              <div className='flex justify-between mt-2'>
                <label className='text-gray-600 text-sm'>
                  Month/Year
                  <input
                    type='text'
                    name='monthYear'
                    placeholder='00/00'
                    className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none w-24 rounded-md'
                    value={cardInfo.monthYear}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </label>
                <label className='text-gray-600 text-sm'>
                  Code
                  <input
                    type='password'
                    name='code'
                    placeholder='123'
                    className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none w-24 rounded-md'
                    value={cardInfo.code}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-md p-5 w-full max-w-4xl'>
        <p className='text-xl font-semibold mb-4'>Payment Information</p>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <label className='flex-1 text-gray-600 text-sm'>
              First Name
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
                value={cardInfo.firstName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
            <label className='flex-1 text-gray-600 text-sm'>
              Last Name
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
                value={cardInfo.lastName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
          </div>
          <label className='text-gray-600 text-sm'>
            Country
            <input
              type='text'
              name='country'
              placeholder='Country'
              className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
              value={cardInfo.country}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </label>
          <div className='flex flex-col sm:flex-row gap-4'>
            <label className='flex-1 text-gray-600 text-sm'>
              City
              <input
                type='text'
                name='city'
                placeholder='City'
                className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
                value={cardInfo.city}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
            <label className='flex-1 text-gray-600 text-sm'>
              Zip Code
              <input
                type='number'
                name='zipCode'
                placeholder='Zip Code'
                className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
                value={cardInfo.zipCode}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </label>
          </div>
          <label className='text-gray-600 text-sm'>
            Email Address
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
              value={cardInfo.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </label>
          <label className='text-gray-600 text-sm'>
            Phone Number
            <input
              type='number'
              name='phone'
              placeholder='Phone Number'
              className='mt-1 p-2 border-b-2 border-gray-300 focus:outline-none rounded-md'
              value={cardInfo.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </label>
          <button
            onClick={isEditing ? handleSave : handleEdit}
            className={`py-2 px-4 rounded-md text-white ${isEditing ? 'bg-green-600' : 'bg-blue-600'} hover:bg-opacity-90 transition duration-200`}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
