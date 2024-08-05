import React, { useState } from 'react';

const Address = () => {
  const [formData, setFormData] = useState({
    nameOnCard: 'User XYZ',
    country: 'Pakistan',
    streetAddress: 'ABC',
    streetAddressLine2: 'Ja jasd al',
    city: 'AAA',
    state: 'BBB',
    postalCode: '350',
    deliveryAddressSameAsBilling: false,
    businessTaxID: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-5'>
      <div className='w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold mb-6'>Address Information</h1>
        <form className='space-y-6'>
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Name on Card</label>
              <input
                type='text'
                name='nameOnCard'
                value={formData.nameOnCard}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Country</label>
              <input
                type='text'
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Street Address</label>
              <input
                type='text'
                name='streetAddress'
                value={formData.streetAddress}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Street Address Line 2 (optional)</label>
              <input
                type='text'
                name='streetAddressLine2'
                value={formData.streetAddressLine2}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>City</label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>State, Province, or Region (optional)</label>
              <input
                type='text'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Postal Code</label>
              <input
                type='text'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='flex items-center'>
              <input
                type='checkbox'
                name='deliveryAddressSameAsBilling'
                checked={formData.deliveryAddressSameAsBilling}
                onChange={handleChange}
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label className='ml-2 text-gray-700 text-sm'>Delivery address same as billing</label>
            </div>
            <div>
              <label className='block text-gray-700 text-sm font-medium mb-1'>Business Tax ID</label>
              <input
                type='text'
                name='businessTaxID'
                value={formData.businessTaxID}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
              />
            </div>
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

export default Address;
