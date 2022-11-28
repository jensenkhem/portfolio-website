import React from 'react'
import './projects.css'
import devinabox from '../../assets/devinabox.jpg'
const Projects = () => {
  return (
    <div className="container projects__container" id="projects">
      <h2>Projects</h2>
      <hr />
      <div className="card-grid">
        <div class="card card-shadow">
          <div class="card-header">
            <img class="devinabox" src={devinabox} alt="dev in a box card"></img>
          </div>
          <div class="card-body">
            Lorem Ipsum ...
          </div>
          <div class="card-footer">
            <button class="btn">Details</button>
            <button class="btn btn-outline">Contact seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
