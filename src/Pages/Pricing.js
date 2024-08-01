import React, { useEffect } from 'react'
import Searchbar from '../Components/Searchbar'
import GradeIcon from '@mui/icons-material/Grade';
import { Link, useParams } from 'react-router-dom';
import dummydata from '../Components/Dummydata';
import Skills from '../Components/Skills';
import Certificate from '../Components/Certificate';
import Reviews from './Reviews';

const Pricing = () => {
    const { id } = useParams()
    const filtercourse = dummydata.filter((e) => e.id == id)

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
      
      useEffect(() => {
        scrollToTop();
      }, []); 

    return (
        <div className='bg-[#e3faff] '>

            <div className='pt-10 pb-10'>
                <Searchbar fname={'Pricing'} lname={'Strategy'} ></Searchbar>
            </div>
            {/*  */}
            <div className='bg-[#c6f3ff]  flex flex-col items-center justify-center  p-6   md:flex md:flex-row   md:justify-around md:p-6'>
                {
                    filtercourse.map((e) =>
                        <div className='flex flex-col'>
                            <h2 className='text-md  md:text-xl lg:text-3xl font-semibold'>Course : {e.title}</h2>
                            <h3 className='mt-6'>Instructor : <span className='font-semibold underline'>{e.author}</span></h3>
                            <h4>Languages (2)</h4>
                            <div className='mt-4'>
                                <button className='bg-white p-2 rounded-xl px-6 font-semibold'>English</button>
                                <button className='bg-white p-2 rounded-xl px-6 font-semibold mx-6'>Urdu</button>
                            </div>
                            <span className='mt-3 mb-3'>Note : Some content might not be Translated.</span>
                            <Link to="/payment" className='w-[140px] p-2 bg-[#ff0000] text-white font-semibold text-sm md:text-lg rounded-lg my-2'>Enroll for 50$</Link>
                            <span className='text-xs font-semibold'>5,657 already enrolled.</span>
                            <p className='mt-4 mb-4'>Certificates will be provided at the time of completion</p>
                        </div>
                    )
                }
                {/* /////////////////// */}
                <div className=' w-[80%] md:w-[300px] border-2 border-black rounded-md p-3'>
                    <h4 className='text-xl font-semibold'>Course</h4>

                    <span className=''>Lorem ipsum dolor sit amet conse ctetur.</span>
                    <hr className='m-2 mt-3 border-black border' />
                    <div className='flex  items-center justify-evenly'>
                        <span className='text-lg font-semibold'>4.4 <GradeIcon /></span>
                        <span className='mt-2 mb-2' >(984) Reviews</span>
                    </div>
                    <span className='mt-4 mb-2'>Likes : 90%</span>
                    <h4 className='mt-4 text-xl font-bold'>Beginner Level </h4>
                    <span>No prior Experience required</span>
                    <h4 className='mt-4 text-xl font-bold'>13 hours (Approximately) </h4>
                    <span>Flexible Shedule</span>
                    <h4 className='mt-4 text-lg font-bold'>Learn at your own Pace. </h4>

                </div>

            </div >



            <Skills></Skills>
            <Certificate></Certificate>
            <Reviews></Reviews>
        </div >
    )
}

export default Pricing
