import React from 'react'
import roboImg from "../Assests/ROBOT.png"

const ReceiptInfo = () => {
  return (
    <div className='bg-[#3F627E] px-6 sm:px-2 relative flex flex-col items-center justify-center py-10 gap-5'>
        <h2 className='text-white text-md text-center md:text-xl font-medium'>Please Enter Recipient's Information</h2>
        <img src={roboImg} className='absolute right-0 top-0 w-[12%] ' />
        <div className='h-72 w-full sm:w-[30rem] bg-white rounded-3xl border border-black shadow-lg p-4 md:p-6'>

       <form className='flex flex-col gap-5 '>
       <label htmlFor='name' className='flex flex-col gap-2 font-bold text-sm md:text-md'>
          Name:
          <input type='text' id='name' className='border-black border p-2 rounded-md font-normal '  />
        </label>

        <label htmlFor='email' className='flex flex-col gap-2 font-bold text-sm md:text-md'>
        Receipient Email:
          <input type='email' id='email' className='border-black border p-2 rounded-md font-normal '  />
        </label>

        <button type='submit' className=' w-32 bg-gray-300 border border-gray-600 rounded-md self-center font-bold text-sm py-1'>Submit</button>

       </form>

        </div>
    </div>
  )
}

export default ReceiptInfo