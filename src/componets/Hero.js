import React, { useEffect, useState } from 'react';
import dp from '../assets/dp.png';
import '../style.css/Hero.css';

const Hero = () => {
  const text = "Software Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, index));
      setIndex(prevIndex => prevIndex + direction);

      if (index === text.length && direction === 1) {
        setDirection(-1);
      } else if (index === 0 && direction === -1) {
        setDirection(1);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [index, direction, text]);
  const handleResumeDownload = () => {
  const googleDriveLink = 'https://drive.google.com/file/d/1Ng3t92w_EaWDYbOOhPKC2b1ZLA6KVGHF/view?usp=sharing';
  window.open(googleDriveLink, '_blank'); // Opens the link in a new tab
};
  const handleContact = () => {
    const phoneNumber = '9146890521'; 
    window.open(`tel:${phoneNumber}`);
  };


  return (
    <div className='container-fluid hero d-flex justify-content-center align-items-center min-vh-84'>
      <div className='row row-cols-1 row-cols-sm-2 align-items-center w-100'>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <div className='img-div'>
            <img src={dp} alt="Profile" className='img-fluid'/>
          </div>
          <div className='d-flex gap-4 mt-4'>
          <button type="button" className="btn btn-primary btn-md" onClick={handleResumeDownload}>Resume</button>
          <button type="button" className="btn btn-primary btn-md" onClick={handleContact}>Contact</button>
          </div>
        </div>

        <div className='col text-center mt-sm-0 mt-4'>
          <h1>DHANRAJ PIMPLE</h1>
          <h3>I am a <span>{displayText}</span></h3>
          <p>
            I am a passionate developer with strong knowledge in web development. My expertise spans various technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, C++, React Native, and Next.js. I have also gained valuable experience through a 6-month internship as a Software Developer Intern at TMD Create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
