import React from 'react'
import backgroundImg from "../Assests/pricingBackground.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate} from '@fortawesome/free-solid-svg-icons'
import ReceiptInfo from '../Components/ReceiptInfo'
import CourseDisplay from '../Components/CourseDisplay'


const PricingPage = () => {
  return (
   <div >

<div  className=" bg-cover md:bg-contain  bg-no-repeat bg-top h-[85vh]"
      style={{
        backgroundImage:  `url(${backgroundImg})`,
      }}>
       
      <div className=' flex flex-col items-center justify-center md:justify-end px-10 md:px-2  pt-[10%] md:pl-[15%] gap-2'>
        <p className='text-white text-2xl lg:text-5xl font-serif font-bold mb-8 text-center'>Gift a Subscription</p>
        <p className='text-white text-lg lg:text-2xl  text-center'>Share the excitement of exploring the digital world</p>
        <p className='text-white  text-lg lg:text-2xl text-center  '>with your friends and family.</p>
      </div>


</div>

    <div className='flex flex-col items-center gap-14 mb-20 mt-10 md:mt-[-10%] lg:mt-10'>
        <h2 className='text-3xl  font-bold '>Choose a Pricing Option</h2>
        <div className='flex items-center justify-center gap-10 md:gap-8 lg:gap-14 px-4 w-[100%] flex-wrap'>

        <div className=" cursor-pointer w-[190px] rounded-3xl bg-[#f5f5f5] relative p-7 border-2 border-[#c3c6ce] transition ease-out duration-500 overflow-visible group hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black h-full gap-2  place-content-center flex flex-col items-center">
      <p className='text-2xl font-bold '>$29.99</p>
                <p className='text-center text-sm font-medium'>Gift One-Month Membership</p>
              <div className='h-1 w-full bg-gray-400 my-2'></div>
            <p className='text-center text-sm'>Gift access to our entire course catalog for one month</p>
      </div>
      <button className="transform translate-x-[-50%] translate-y-[125%] w-[60%] rounded-xl border-none bg-[#1c4a6d] text-white text-md py-1 px-1 absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-300 group-hover:translate-y-[50%] group-hover:opacity-100">
      <FontAwesomeIcon icon={faCertificate} />
      </button>
    </div>

           {/* second card */}

           <div className=" cursor-pointer w-[190px] rounded-2xl bg-[#f5f5f5] relative p-7 border-2 border-[#c3c6ce] transition ease-out duration-500 overflow-visible group hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black h-full gap-2  place-content-center flex flex-col items-center">
      <p className='text-xl font-bold '>$29.99</p>
                <p className='text-center text-sm font-medium'>Gift One-Month Membership</p>
              <div className='h-1 w-full bg-gray-400 my-2'></div>
            <p className='text-center text-sm'>Gift access to our entire course catalog for one month</p>
      </div>
      <button className="transform translate-x-[-50%] translate-y-[125%] w-[60%] rounded-xl border-none bg-[#1c4a6d] text-white text-md py-1 px-1 absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-300 group-hover:translate-y-[50%] group-hover:opacity-100">
      <FontAwesomeIcon icon={faCertificate} />
      </button>
    </div>
    
             {/* third card */}
             <div className=" cursor-pointer w-[190px] rounded-2xl bg-[#f5f5f5] relative p-7 border-2 border-[#c3c6ce] transition ease-out duration-500 overflow-visible group hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black h-full gap-2  place-content-center flex flex-col items-center">
      <p className='text-xl font-bold '>$29.99</p>
                <p className='text-center text-sm font-medium'>Gift One-Month Membership</p>
              <div className='h-1 w-full bg-gray-400 my-2'></div>
            <p className='text-center text-sm'>Gift access to our entire course catalog for one month</p>
      </div>
      <button className="transform translate-x-[-50%] translate-y-[125%] w-[60%] rounded-xl border-none bg-[#1c4a6d] text-white text-md py-1 px-1 absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-300 group-hover:translate-y-[50%] group-hover:opacity-100">
      <FontAwesomeIcon icon={faCertificate} />
      </button>
    </div>

      {/* fourth card */}
      <div className=" cursor-pointer w-[190px] rounded-2xl bg-[#f5f5f5] relative p-7 border-2 border-[#c3c6ce] transition ease-out duration-500 overflow-visible group hover:border-[#008bf8] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)]">
      <div className="text-black h-full gap-2  place-content-center flex flex-col items-center">
      <p className='text-xl font-bold '>$29.99</p>
                <p className='text-center text-sm font-medium'>Gift One-Month Membership</p>
              <div className='h-1 w-full bg-gray-400 my-2'></div>
            <p className='text-center text-sm'>Gift access to our entire course catalog for one month</p>
      </div>
      <button className="transform translate-x-[-50%] translate-y-[125%] w-[60%] rounded-xl border-none bg-[#1c4a6d] text-white text-md py-1 px-1 absolute left-1/2 bottom-0 opacity-0 transition ease-out duration-300 group-hover:translate-y-[50%] group-hover:opacity-100">
      <FontAwesomeIcon icon={faCertificate} />
      </button>
    </div>


        </div>

        </div>

        <ReceiptInfo/>
        <div className='px-4 sm:px-8 md:px-16 lg:px-24 py-10 flex flex-col gap-10 items-center bg-[#E3FAFF] '>
        <h2 className=' text-md md:text-xl font-bold text-center'>Courses That Will Be Included in Subscription</h2>
        <CourseDisplay/>
        
        </div>

   </div>
  )
}

export default PricingPage