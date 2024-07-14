import React from 'react'

const Reviews = () => {
    return (
        <div className='mt-10 p-10'>
            <h2 className='font-semibold text-lg '>Reviews (20)</h2>
            <div className='bg-white p-4'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div>
                        <span className='text-lg mx-4'>Write a Review :</span>
                        <input type="text" placeholder='Name..' className='bg-[#eeebeb] p-2 outline-none border-2 border-black rounded-md' />

                    </div>
                    {/* <button className='w-[140px] p-2 bg-[#ff0000] text-white font-semibold text-lg rounded-sm'>Submit</button> */}

                </div>
                <textarea name="Review" id="" rows={4} placeholder='Write Here...' className=' mx-4 bg-[#eeebeb] p-2 outline-none border-2 border-black rounded-md min-w-[90%] md:min-w-[60%] mt-6'></textarea>

                <div className='flex justify-center '>
                    <button className='w-[140px] mt-4 p-2 bg-[#ff0000] text-white font-semibold text-lg rounded-sm'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
