import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = ({ setActiveTab, activeTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="w-64 h-auto bg-gray-200 shadow-md">
      <nav className="flex flex-col p-4 space-y-2">
        <button 
          onClick={() => handleTabClick('editprofile', '/userprofile-editprofile')} 
          className={`py-2 px-4 rounded ${activeTab === 'editprofile' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Edit Profile
        </button>
        <button 
          onClick={() => handleTabClick('membership', '/userprofile-membership')} 
          className={`py-2 px-4 rounded ${activeTab === 'membership' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Membership
        </button>
        <button 
          onClick={() => handleTabClick('purchase', '/userprofile-purchase')} 
          className={`py-2 px-4 rounded ${activeTab === 'purchase' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Purchase History
        </button>
        <button 
          onClick={() => handleTabClick('editcreditcard', '/userprofile-editcreditcard')} 
          className={`py-2 px-4 rounded ${activeTab === 'editcreditcard' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Credit Card
        </button>
        <button 
          onClick={() => handleTabClick('address', '/userprofile-address')} 
          className={`py-2 px-4 rounded ${activeTab === 'address' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Address
        </button>
        <button 
          onClick={() => handleTabClick('profilecontact', '/userprofile-profilecontact')} 
          className={`py-2 px-4 rounded ${activeTab === 'profilecontact' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
        >
          Contact
        </button>
        <button className="mt-auto py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
