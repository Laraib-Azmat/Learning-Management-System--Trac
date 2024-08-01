import React, { useState } from 'react'
import CourseDisplay from '../Components/CourseDisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark} from '@fortawesome/free-solid-svg-icons'

const WorkShops = () => {

    const [displayForm, setDisplayForm] = useState(false)

  return (
    <div className=' relative bg-[#E3FAFF] flex flex-col gap-10 items-center px-24 py-10'>
  
  <div className='flex justify-between items-center w-full'>
  <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold '>Upcomming WorkShops</h2>
        <div className='h-1 w-full bg-gray-800'></div>
        </div>
        <button onClick={()=>setDisplayForm(true)} className='bg-[#6A2C2C] text-white font-semibold rounded-md p-2 hover:bg-[red]'>Register</button>
  </div>

        <CourseDisplay/>
{displayForm && (
   <div className='absolute w-full h-full bg-black top-0 bg-opacity-50 flex flex-col items-center gap-10 py-20'>
     <form className=' relative bg-white w-[55%] items-center flex flex-col py-10 gap-5  rounded-md'>
   <FontAwesomeIcon onClick={()=>setDisplayForm(false)} icon={faSquareXmark} className='absolute  right-10 top-10 text-xl text-blue-500 cursor-pointer' />

        <h2 className='text-xl font-sans font-semibold mb-5 '>Register for Workshop</h2>
       
       <div className='flex flex-col gap-5 '>
        
        <div className='flex gap-5 font-sans items-center '>
        <p className='w-full text-sm'>Select Workshop:</p>
        <select className='self-end   border rounded-xl border-black bg-blue-200 p-1 px-4 text-sm'  >
            <option value="web development">Web Development</option>
            <option value='data science'>Data Science</option>
            <option value="cyber security">Cyber Security</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Game development">Game development</option>
        </select>
        </div>

       <label className='flex gap-5 font-sans items-center '>
           <p className='w-full text-sm'>Your Name:</p>
            <input type='text' className='self-end   border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm'  />
        </label>

        <label className='flex gap-5 font-sans items-center flex-1  '>
           <p className='w-full text-sm'>Phone number:</p>
            <input type='text' className='self-end    border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm '  />
        </label>

        <label className='flex gap-5 font-sans items-center  '>
           <p className='w-full text-sm' >Email address:</p>
            <input type='email' className='border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm'  />
        </label>

        <label className='flex gap-5 font-sans items-center  '>
          <p className='w-full text-sm'>Experience:</p>
            <input type='text' className='border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm '  />
        </label>

        <label className='flex gap-5 font-sans items-center  '>
           <p className='w-full text-sm'>Skill Interest:</p>
            <input type='text' className='border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm'  />
        </label>

        <label className='flex gap-5 font-sans items-center  '>
            <p className='w-full text-sm'>Linkedin profile:</p>
            <input type='text' className='border rounded-xl border-black bg-gray-200 p-1 px-2 text-sm'  />
        </label>

       </div>
        <button className='text-sm bg-blue-600 text-gray-300 w-40 rounded-md py-1'>Apply Now!</button>
    </form>
    </div>
)}

    </div>
  )
}

export default WorkShops