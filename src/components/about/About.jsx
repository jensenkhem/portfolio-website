import React from 'react'
import './about.css'
import jensen from '../../assets/jensen.jpg'
import resume from '../../assets/resume.pdf'
const About = () => {
  const style = {"font-family": "Poppins"}
  return (
    <>
    <div className="container about__container" id="about">
      <h2>About Me</h2>
      <div className='about-wrapper'>
        <div className='info' style={style}>
            4th year Computing Science student at the University of Alberta and aspiring Software Developer. 
            <br></br><br></br>
            My short-term objective is to channel my 
            passion for technology into a career where I have the opportunity to work with other like-minded
            individuals and improve the lives of those around me.
            <br></br><br></br>
            <p>For more detailed information about my relevent skills and experience,</p>
            <button className="btn resumebutton"><a href={resume} target="_blank" rel="noreferrer">Download my resume</a></button>
        </div>
        <img className='me' alt="me!" src={jensen}></img>
      </div>
      <hr />
    </div>
    </>
  );
}
export default About;
