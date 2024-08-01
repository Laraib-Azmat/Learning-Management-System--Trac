import React from 'react'
import certificate from '../Assests/certificate.png'

const Certificate = () => {
    return (
        <div className='mt-10 p-10'>
            <h3 className='font-semibold text-lg '> Certificate :</h3>
            <div className='flex flex-col items-center justify-center mt-4 p-6 '>
                <img src={certificate} alt="certificate" />
            </div>
        </div >
    )
}

export default Certificate
