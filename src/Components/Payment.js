import React from 'react'
import visaIcon from "../Assests/visaIcon.svg"
import { TypeAnimation } from 'react-type-animation'

export const Payment = () => {
  return (
    <div className='flex  gap-5 items-center justify-between h-screen sm:h-[73vh] bg-[#E3FAFF] '>
        
       <div className='h-screen sm:h-fit flex items-start justify-evenly w-[100%] gap-5 flex-wrap sm:flex-nowrap overflow-auto'>
       <div className=' sm:h-52 w-full mx-5 sm:mx-1  sm:w-fit flex flex-col  gap-5  md:ml-10 '>
            <p className='font-bold font-sans text-md lg:text-xl'>Card Information</p>
            <div className='bg-white p-4 flex flex-col gap-5 sm:px-10'>
                    <img src={visaIcon} className='w-10 h-10 self-end ' />
                    <label className='text-sm text-gray-500 flex flex-col gap-2'>
                        <p>Card Number</p>
                        <input type='number' placeholder='0000 0000 0000 0000' className=' focus:outline-none  border-b-2 border-gray-400 w-fit' />
                    </label>

                    <div className='flex w-full items-center justify-between  '> 
                        <label className='text-sm text-gray-500 flex flex-col '>
                            <p>Month/Year</p>
                            <input type='text' placeholder='00/00' className=' focus:outline-none w-10 border-b-2 border-gray-400' />
                        </label>

                        <label className='text-sm text-gray-500 flex flex-col '>
                            <p>Code</p>
                            <input type='password' placeholder='1234' className='focus:outline-none w-10 border-b-2 border-gray-400' />
                            </label>
                    </div>
            </div>
        </div>

        <div className='flex flex-col  gap-5 sm:mr-5 w-full sm:w-fit mx-5 sm:mx-1 '>
        <p className='font-bold font-sans text-md lg:text-xl'>Payment Information</p>
        <div className='bg-white p-4 flex flex-col gap-5 '>

       <div className='flex gap-5 items-center flex-col sm:flex-row '>
       <input type='text' placeholder='First Name' className='border-b-2 border-gray-300 w-full text-sm focus:outline-none' />
       <input type='text' placeholder='Last Name' className='border-b-2 w-full border-gray-300 text-sm focus:outline-none' />
       </div>
        
        <input type='text' placeholder='Country' className='border-b-2 border-gray-300 text-sm focus:outline-none' />

        <div className='flex gap-5 items-center flex-col  sm:flex-row '>
       <input type='text' placeholder='City' className='border-b-2 w-full border-gray-300 text-sm focus:outline-none' />
       <input type='number' placeholder='Zip Code' className='border-b-2 w-full border-gray-300 text-sm focus:outline-none' />
       </div>

       <input type='email' placeholder='Email Address' className='border-b-2 border-gray-300 text-sm focus:outline-none' />
       <input type='number' placeholder='Phone number' className='border-b-2 border-gray-300 text-sm focus:outline-none' />

            <button className='bg-green-600 text-white py-1 w-20 rounded-md self-center text-sm sm:text-md ' >Pay Now</button>
            </div>

        </div>
       </div>

        <div className=' hidden  bg-blue-500 w-[30vw] h-[100%] md:flex items-center justify-center px-6'>
        <TypeAnimation
      sequence={[

        'Pay for your Future',
        1000, 
        'Pay for your Skills',
        1000,
        'Pay  for your success',
        1000,
        'Pay  for your goals',
        1000
      ]}
      wrapper="span"
      speed={50}
     className='text-white font-bold text-2xl'
      repeat={Infinity}
    />
        </div>

    </div>
  )
}
