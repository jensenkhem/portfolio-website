import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jensen-khemchandani-2419301a7/" target="_blank" rel="noreferrer">
            <div className='icon'>
                <BsLinkedin size={25}/>
            </div>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
            <div className='icon'>
                <BsGithub size={25}/>
            </div>
        </a>
    </div>
  );
} 
export default HeaderSocials
