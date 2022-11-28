import React from 'react';
import HeaderSocials from './HeaderSocials';
import './header.css';
const Header = () => {
  const style = { "font-family": "Poppins", "color": "lightgrey"};
  const style2 = { "font-family": "Poppins", "color": "grey"};
  return (
    <>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </head>
    <nav class="navbar sticky-top navbar-expand-md navbar-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <a class="navbar-brand" style={style2} href="#">Quick Navigation</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" style={style} href="#about">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style={style} href="#experience">Experience</a>
            </li>
        </ul>
    </div>
    </nav>
    <header>
      <div className="introduction">
        <h1>Jensen Khemchandani</h1>
        <h4 className="text-light">Software Developer</h4>
        <HeaderSocials />
      </div>
      {/* <hr /> */}
    </header>
    </>
  );
}

export default Header;
