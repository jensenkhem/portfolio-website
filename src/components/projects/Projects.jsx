import React from 'react'
import './projects.css'
import devinabox from '../../assets/devinabox.jpg'
import portfolio from '../../assets/portfolio.png'
import maplefinder from '../../assets/maplefinder.png'
import sudoku from '../../assets/sudoku.png'
import gearbook from '../../assets/gearbook.png'
import comingsoon from '../../assets/comingsoon.png'
const Projects = () => {
  return (
    <div className="container projects__container" id="projects">
      <h2>Projects</h2>
      <hr />
      <div className="card-grid">
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={devinabox} alt="dev in a box card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>Cloud Computing Dashboard</h5></div>
            <hr></hr>
            An interactive dashboard and user management platform for cloud computing resources.
            <br></br><br></br>
            Developed and deployed for a local start-up company with support of the University of Alberta.  
            <hr></hr>
            <div className="techlist">
              NodeJS, ReactJS, PostgreSQL, <br></br> OAuth 2.0, Docker, Stripe
            </div>
          </div>
          <div className="card-footer">
          <button className="btn"><a href="#" target="_blank" rel="noreferrer">Learn more</a></button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={portfolio} alt="something else card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>Personal Portfolio website</h5></div>
            <hr></hr>
            A personal website containing information about myself and my developer portfolio.
            <hr></hr>
            <div className="techlist">
              ReactJS, HTML, CSS
            </div>
          </div>
          <div className="card-footer">
            <button className="btn"><a href="https://github.com/jensenkhem/portfolio-website" target="_blank" rel="noreferrer">Learn more</a></button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={maplefinder} alt="something else card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>Party Finder</h5></div>
            <hr></hr>
            A full stack web application where players of the popular online game: 'Maplestory' can organize and manage groups of characters, and connect with other players.
            <hr></hr>
            <div className="techlist">
              Ruby on Rails, SQLite, HTML, CSS
            </div>
          </div>
          <div className="card-footer">
            <button className="btn"><a href="https://github.com/jensenkhem/maple_party_finder" target="_blank" rel="noreferrer">Learn more</a></button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={sudoku} alt="something else card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>Intelligent Sudoku Solver</h5></div>
            <hr></hr>
            An intelligent sudoku solver which uses the <a href="https://en.wikipedia.org/wiki/AC-3_algorithm">AC3 (Arc Consistency)</a> constraint-satisfaction algorithm
            along with recursive backtracking, to solve very difficult sudoku puzzles in a short amount of time.
            <hr></hr>
            <div className="techlist">
              Python
            </div>
          </div>
          <div className="card-footer">
            <button className="btn"><a href="https://github.com/jensenkhem/maple_party_finder" target="_blank" rel="noreferrer">Learn more</a></button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={gearbook} alt="something else card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>Community Library Mobile App</h5></div>
            <hr></hr>
            A mobile app which provides a social community for showcasing your personal book collection 
            and sharing books with others in your community.
            <hr></hr>
            <div className="techlist">
              Java, Kotlin, Android
            </div>
          </div>
          <div className="card-footer">
            <button className="btn"><a href="https://github.com/CMPUT301F20T30/3dayslate" target="_blank" rel="noreferrer">Learn more</a></button>
          </div>
        </div>
        <div className="card card-shadow">
          <div className="card-header card-image">
            <img className="project-img" src={comingsoon} alt="something else card"></img>
          </div>
          <div className="card-body">
            <div className="card-title"><h5>More Projects Coming soon!</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
