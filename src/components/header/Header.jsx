import React from 'react';
import HeaderSocials from './HeaderSocials';
import './header.css';
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Header = () => {
  const style = { "font-family": "Poppins", "color": "lightgrey", "margin-left": "1rem"};
  const style2 = { "font-family": "Poppins", "color": "grey", "margin-left": "1rem" };
  const style3 = { "font-family": "Poppins"};
  const style4 = { "background-color": "#110729"}
  const locationIcon = { "color": "white", "size": 25 }
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </head>
    <nav class="navbar sticky-top navbar-dark navbar-expand-md" style={style4}>
      <ul class="navbar-nav mr-auto">
        <a class="navbar-brand" style={style2} href="#">Quick Navigation</a>
        <li class="nav-item">
            <a class="nav-link" style={style} href="#about">About Me</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={style} href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
      <header>
        <div className="introduction">
          <h1>Jensen Khemchandani</h1>
          <h4 className="greyh4" style={style3}>Software Developer</h4>
          <div style={{display: "flex", justifyContent: "center"}}>
            <HiOutlineLocationMarker style={locationIcon}/>
            <h6 className="greyh4" style={style3}>{'\u00A0'}Edmonton, AB, CA</h6>
          </div>
          <HeaderSocials />
        </div>
      </header>
    </>
  );
}

export default Header;
