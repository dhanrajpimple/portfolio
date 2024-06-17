import React from 'react';
import '../style.css/Footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer-container gap-3 container-fluid pb-3'>
      <div className='d-flex text-center gap-5 mt-3'>
        <a href="https://www.linkedin.com/in/dhanraj-pimple-1b802a274/" target="_blank" rel="noopener noreferrer" className='icon'>
          <FaLinkedin className='fs-3 text-white' />
        </a>
        <a href="https://github.com/dhanrajpimple" target="_blank" rel="noopener noreferrer" className='icon'>
          <FaGithub className='fs-3 text-white' />
        </a>
        <a href="https://leetcode.com/u/dpimple/" target="_blank" rel="noopener noreferrer" className='icon'>
          <SiLeetcode className='fs-3 text-white' />
        </a>
      </div>
      <div className='p text-center'>
        <p className='p'>Copyright 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
