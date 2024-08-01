import React from 'react'
import logo from '../Assests/trac_.png'
import facebookicon from "../Assests/facebook-app-round-white-icon.webp"
import instagramicon from "../Assests/instagram-white-icon.webp"
import youtubeicon from "../Assests/youtube-app-white-icon.webp"
import linkedinicon from "../Assests/linkedin-app-white-icon.webp"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
    return (
        <div className='bg-black p-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left '>
        <div className='mb-4 md:mb-0 cursor-pointer ' onClick={()=>{window.scrollTo(0,0);navigate('/')}}>
          <img src={logo} alt="Logo" className='h-[20px] sm:h-[45px]' />
        </div>
        <div className='text-white text-xs mb-4 md:mb-0'>
          &copy; CopyRights. All Rights Reserved
        </div>
        <div className='flex gap-4 items-center'>
          <a href='https://web.facebook.com/tractaxila?_rdc=1&_rdr' target='_blank' rel='noopener noreferrer'>
            <img className='h-[15px] sm:h-[20px] cursor-pointer hover:scale-110 transition-transform' src={facebookicon} alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/tractaxila?igsh=MTA2NHB4a3p1Zjd6dA==' target='_blank' rel='noopener noreferrer'>
            <img className='h-[15px] sm:h-[20px] cursor-pointer hover:scale-110 transition-transform' src={instagramicon} alt='Instagram' />
          </a>
          <a href='https://youtube.com/@tracuettaxila?si=7ci-gVmEZ36HOlGn' target='_blank' rel='noopener noreferrer'>
            <img className='h-[15px] sm:h-[20px] cursor-pointer hover:scale-110 transition-transform' src={youtubeicon} alt='YouTube' />
          </a>
          <a href='https://www.linkedin.com/company/tractaxila/' target='_blank' rel='noopener noreferrer rounded-lg'>
            <img className='h-[15px] sm:h-[20px] cursor-pointer hover:scale-110 transition-transform rounded-sm md:rounded-lg' src={linkedinicon} alt='LinkedIn' />
          </a>
        </div>
      </div>
    )
}

export default Footer
