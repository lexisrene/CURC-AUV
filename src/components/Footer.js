import React from 'react';
import { FaLinkedin, FaSlack, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Columbia University Robotics Club</p>
        <div className="social-media-links">
          <a href="https://www.linkedin.com/company/curobotics/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://join.slack.com/t/columbiaurobotics/shared_invite/zt-2pfhr79hx-6raBzG7IiA3NK2i1e0k8Xw" target="_blank" rel="noopener noreferrer">
            <FaSlack />
          </a>
          <a href="https://www.instagram.com/curobotics/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
