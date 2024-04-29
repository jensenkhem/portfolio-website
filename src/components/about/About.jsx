import React from 'react'
import './about.css'
import jensen from '../../assets/jensen.jpg'
import resume from '../../assets/resume.pdf'
const About = () => {
  const style = {"font-family": "Poppins"}
  const style2 = {"margin-left": "0px"}
  return (
    <>
    <div className="container about__container" id="about">
      <h2>About Me</h2>
      <div className='about-wrapper'>
        <div className='info' style={style}>
            <h5>Who am I?</h5>
            I am a Software Developer based out of Edmonton, Alberta, Canada with a degree in Computing Science from the University of Alberta.
            <br></br><br></br>
            <h5>Experience</h5>
            <p>For detailed information about my relevent skills and experience,</p>
            <button className="btn resumebutton" style={style2}><a href={resume} target="_blank" rel="noreferrer">Download my resume</a></button>
            <br></br><br></br>
            <hr />
        </div>
        <img className='me' alt="me!" src={jensen}></img>
      </div>
      <hr />
    </div>
    </>
  );
}
export default About;
