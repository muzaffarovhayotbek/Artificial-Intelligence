import React from 'react';
import HeaderIcon from '../../assets/header-icon.svg';
import './Header.css';

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container header__container">
          <div className="header-logo">
            <img src={HeaderIcon} alt="icon" width={44} />
            <h2>Artificial Intelligence</h2>
          </div>
          <div className="header-nav">
            <ul className="header-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-btn">
            <button>Sign In</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
