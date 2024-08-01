import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = (props) => {
    return (
        <div className='flex flex-col items-center sm:flex-row space-y-4  justify-between '>
            <div className=' text-md md:text-xl lg:text-2xl font-semibold sm:ml-[3em]'> {props.fname}   <span className='text-red-600'>{props.lname}</span>   </div>
            <div className='sm:mr-[2em] border-2 p-1 px-6 bg-slate-300 text-xs border-black flex justify-center items-center rounded-3xl'>
                <input type="text" name="" id="" placeholder='Search Courses.' className='border-none outline-none bg-transparent font-semibold ' />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Searchbar
