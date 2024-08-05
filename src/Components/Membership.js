import React from 'react';

const Membership = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg min-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Membership Details</h2>
      <p className="mb-4">Welcome to the membership page. Here you will find all the details about your membership.</p>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Current Plan</h3>
        <p>Premium Membership</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Membership Benefits</h3>
        <ul className="list-disc list-inside">
          <li>Unlimited access to all courses</li>
          <li>Priority customer support</li>
          <li>Exclusive webinars and workshops</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Renewal Date</h3>
        <p>January 1, 2025</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Payment Method</h3>
        <p>Visa ending in 1234</p>
      </div>
      
      <div className="flex justify-end">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
          Upgrade Membership
        </button>
      </div>
    </div>
  );
};

export default Membership;
