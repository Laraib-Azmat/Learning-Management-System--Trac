import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import dummydata from './Dummydata';
const Courses_items = () => {

    return (
        <div className='flex justify-center flex-wrap'>
            {
                dummydata.map((e) =>
                    <Link to={`/coursedetails/${e.id}`} key={e.id} >
                    <div className='border-2 border-black  h-[220px] w-[180px] sm:h-[320px] sm:w-[280px] flex flex-col m-2 sm:m-4'>
                        <div className=' h-[70%] w-[100%]'><img src={e.image} className='h-[100%] w-[100%]' alt="" /> </div>
                        <span className='font-semibold text-lg text-center m-1'>{e.title}</span>
                        <span className='font-semibold text-lg text-center'>By : {e.author}</span>
                        <div className='flex justify-end'>
                            <Link to={`/course/${e.id}`}><span className='text-xs cursor-pointer'>Learn more<ArrowRightIcon></ArrowRightIcon></span></Link>
                        </div>
                    </div>
                    </Link>
                )
            }
        </div>
    )
}

export default Courses_items
