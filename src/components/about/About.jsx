import React from 'react'
import './about.css'
import jensen from '../../assets/jensen.jpg'
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
            I have been passionate about technology for since childhood, and my short-term objective is to channel this 
            passion into a career where I have the opportunity to work with other like-minded
            individuals to improve the lives of those around me.
            <br></br><br></br>
        </div>
        <img className='me' alt="me!" src={jensen}></img>
      </div>
      <hr />
    </div>
    </>
  );
}
export default About;
