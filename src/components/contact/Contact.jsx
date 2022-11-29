import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="container contact__container" id="contact">
      <h2>Contact</h2>
      <hr />
      <div className="emaildiv">
        <h6 className="emailtext"><FiMail className='icon emailicon' size={25}></FiMail> <span className="emailtext2">jensenkhem@gmail.com</span></h6>
        <div className="contacttext"><h6>Other contact methods available upon request.</h6></div>
      </div>
    </div>
  )
}

export default Contact;
