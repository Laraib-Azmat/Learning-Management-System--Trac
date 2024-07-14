import React from 'react'
import logo from '../Assests/trac_.png'
import facebookicon from "../Assests/facebook-app-round-white-icon.webp"
import instagramicon from "../Assests/instagram-white-icon.webp"
import youtubeicon from "../Assests/youtube-app-white-icon.webp"
import linkedinicon from "../Assests/linkedin-app-white-icon.webp"

const Footer = () => {
    return (
        <div className='bg-black p-2 flex justify-between  items-center '>
            <div> <img src={logo} alt="" className='sm:h-[50px] h-[25px]' /></div>
            <div className='text-white text-xs'>
                &copy; CopyRights.All Rights Reserved
            </div>
            <div className='flex gap-2 mr-20'>
                <a href='https://web.facebook.com/tractaxila?_rdc=1&_rdr' target='blank' ><img className='sm:h-[30px] h-[25px] cursor-pointer hover:scale-110 ' src={facebookicon} alt='facebook'></img></a>
                <a href='https://www.instagram.com/tractaxila?igsh=MTA2NHB4a3p1Zjd6dA==' target='blank'><img className='sm:h-[30px] h-[25px] cursor-pointer hover:scale-110 ' src={instagramicon} alt='insta'></img></a>
                <a href='https://youtube.com/@tracuettaxila?si=7ci-gVmEZ36HOlGn' target='blank'><img className='sm:h-[30px] h-[25px] cursor-pointer hover:scale-110 ' src={youtubeicon} alt='youtube'></img></a>
                <a href='https://www.linkedin.com/company/tractaxila/' target='blank'><img className='sm:h-[30px] h-[25px] cursor-pointer hover:scale-110 ' src={linkedinicon} alt='linkedin'></img></a>
            </div>
            
        </div>
    )
}

export default Footer
