import React from 'react';
import HeaderSocials from './HeaderSocials';
import './header.css';
import jensen from '../../../src/assets/jensen.jpg';
const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h1>Jensen Khemchandani</h1>
            <h4 className="text-light">Software Developer</h4>
            <HeaderSocials />
        </div>
        <img src={jensen}></img>
    </header>
  );
}

export default Header;
