import React from 'react';
import './Hero.css';
import image from '../../assets/me.png';

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="name">
          <h1 className="name-text">Bill Sebastian</h1>
          <div className="name-underline"></div>
        </div>

        <ul className='navigation'>
          {['education','contact'].map((section) => (
            <li key={section} className="nav-item">
              <a 
                href={`#${section}`} 
                className="nav-link" 
                onClick={(e) => handleScroll(e, section)}
              >
                <span className="nav-text">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="nav-underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero-content">
        <div className="description">
          <h2>Full Stack Developer creating modern web experiences</h2>
          <p className="hero-subtext">
            I specialize in building responsive, performant applications with React, 
            Node.js, and modern web technologies. Let's turn your ideas into reality.
          </p>
          <div className="hero-actions">
            <button 
              className="primary-btn" 
              onClick={() => window.open('https://github.com/SebastianO6', '_blank')}
            >
              View My Work
            </button>
            <button 
              className="secondary-btn" 
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={image} alt="Bill Sebastian" />
        </div>
      </div>
    </div>
  );
};

export default Hero;