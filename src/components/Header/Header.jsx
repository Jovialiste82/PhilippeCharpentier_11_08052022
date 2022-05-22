import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link className='header-logo' to='/'>
        <img src='/logo-01.png' alt='' />
      </Link>
      <nav>
        <Link className='navItem' to='/'>
          Accueil
        </Link>
        <Link className='navItem' to='/about'>
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
