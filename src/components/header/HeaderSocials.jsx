import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank">
            <div className='icon'>
                <BsLinkedin size={25}/>
            </div>
        </a>
        <a href="https://github.com" target="_blank">
            <div className='icon'>
                <BsGithub size={25}/>
            </div>
        </a>
    </div>
  );
} 
export default HeaderSocials
