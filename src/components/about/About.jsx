import React from 'react'
import './about.css'
import jensen from '../../assets/jensen.jpg'
import resume from '../../assets/jensen-march-2023-resume.pdf'
const About = () => {
  const style = {"font-family": "Poppins"}
  const style2 = {"margin-left": "0px"}
  return (
    <>
    <div className="container about__container" id="about">
      <h2>About Me</h2>
      <div className='about-wrapper'>
        <div className='info' style={style}>
            <h5>Education</h5>
            4th year Computing Science student at the University of Alberta and aspiring Software Developer. 
            <br></br><br></br>
            <h5>Personal hobbies</h5>
            In my spare time I love to attend
            festivals and live music events around the world,
            especially electronic music events.
            <br></br><br></br>
            My newest obsession is DJing, and
            so far I have played at multiple events, giving me the chance
            to connect with and meet other likeminded people and meet
            some of my musical heroes. 
            <br></br><br></br>
            <h5>Career goals</h5>
            My short-term objective is to channel my 
            passion for technology into a career where I have the opportunity to work with other like-minded
            individuals and improve the lives of those around me.
            <br></br><br></br>
            <h5>Experience</h5>
            <p>For more detailed information about my relevent skills and experience,</p>
            <button className="btn resumebutton" style={style2}><a href={resume} target="_blank" rel="noreferrer">Download my resume</a></button>
        </div>
        <img className='me' alt="me!" src={jensen}></img>
      </div>
      <hr />
    </div>
    </>
  );
}
export default About;
