import React from 'react'
import './projects.css'
import devinabox from '../../assets/devinabox.jpg'
import portfolio from '../../assets/portfolio.png'
const Projects = () => {
  return (
    <div className="container projects__container" id="projects">
      <h2>Projects</h2>
      <hr />
      <div className="card-grid">
        <div className="card card-shadow">
          <div className="card-header">
            <img className="project-img" src={devinabox} alt="dev in a box card"></img>
          </div>
          <div className="card-body">
            Lorem Ipsum ...
          </div>
          <div className="card-footer">
            <button className="btn">Details</button>
            <button className="btn btn-outline">Contact seller</button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header">
            <img className="project-img" src={portfolio} alt="something else card"></img>
          </div>
          <div className="card-body">
            Lorem Ipsum blah blah blah
          </div>
          <div className="card-footer">
            <button className="btn">Details</button>
            <button className="btn btn-outline">Contact seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
