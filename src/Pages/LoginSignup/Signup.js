import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../Assests/background.png'

export default function Signup() {
  return (
    <div  className=" h-[90vh] relative flex items-center justify-center  bg-cover bg-center" style={{ backgroundImage:`url(${background})` }}>
    <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative  flex items-center justify-center p-6 bg-white bg-opacity-0 shadow-lg backdrop-filter backdrop-blur-md w-full max-w-md h-[90%]" style={{  boxShadow: '0 0 1px 1px rgba(255, 255, 255,0.9)'  }}>
        <form className="w-full">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Signup</h2>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
              className="w-11/12 ml-5 p-3 rounded-xl bg-[#3B3270] text-white focus:bg-opacity-100 focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              placeholder="Enter your name"
              style={{ boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.5)' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              className="w-11/12 ml-5 p-3 rounded-xl bg-[#3B3270] text-white focus:bg-opacity-100 focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Enter your email"
              style={{ boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.5)' }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
              className="w-11/12 p-3 ml-5 rounded-xl bg-[#3B3270] text-white focus:bg-opacity-100 focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{ boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.5)'  }}
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-5 mt-10">
            <button
              className=" w-3/12 p-2 bg-[#5ED5F5] text-black rounded hover:bg-white transition duration-300 self-end font-bold"
              type="submit"
            >
              Signup
            </button>
          <div className="text-center text-white text-lg">
              Already have an account?<Link to={'/login'} className= "underline"> Login </Link>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}
