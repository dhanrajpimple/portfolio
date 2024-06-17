import React from 'react';
import '../style.css/Protfoilo.css';
import pie from '../assets/pie.png';
import blog from '../assets/blog app.png';
import socil from '../assets/images.png';
import expense from '../assets/expence.png';
import syropage from '../assets/syrophage.png';
import tictac from '../assets/tictok.png';

const Protfoilo = () => {
  return (
    <div className='container-fluid portfoilo-container py-5'>
      <h1 className='text-center mb-4'>Portfolio</h1>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <div className='col'>
        <div className='card'>
            <img src={pie} className='card-img-top img-fluid bg-white' alt='Pie Chart App' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Pie-clothing</h5>
              <p className='card-text text-dark fw-normal'>
              A e-commerce cloth shop made using Remix.js, Typescript, Node.js, Express.js, MongoDB, and CSS. 
              </p>
              <a href='https://github.com/dhanrajpimple/pie-clothings' target="_blank" rel="noopener noreferrer" className='btn btn-primary  button'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={socil} className='card-img-top img-fluid' alt='Social App' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Social App</h5>
              <p className='card-text text-dark fw-normal'>
                A social networking application made using React.js, Node.js, Express.js, MongoDB, and tailwind CSS.
              </p>
              <a href='https://github.com/dhanrajpimple/TekMedia' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={blog} className='card-img-top img-fluid' alt='Blog App' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Blog App</h5>
              <p className='card-text text-dark fw-normal'>
                A blogging platform for sharing articles made using React.js, Node.js, Express.js, MongoDB, and CSS.
              </p>
              <a href='https://github.com/dhanrajpimple/blogsite' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={expense} className='card-img-top' alt='Expense Tracker' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Expense Tracker</h5>
              <p className='card-text text-dark fw-normal'>
                An application to track your expenses made using React.js, Node.js, Express.js, MongoDB, and CSS .
              </p>
              <a href='https://github.com/dhanrajpimple/expense-' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={syropage} className='card-img-top' alt='Syro Page' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Syrophage</h5>
              <p className='card-text text-dark fw-normal'>
              A static business information site for marketing their business, using HTML and CSS to create a responsive web page.
              </p>
              <a href='https://github.com/dhanrajpimple/rocky/settings' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={tictac} className='card-img-top' alt='Tic Tac Toe' />
            <div className='card-body'>
              <h5 className='card-title fw-bold'>Tic Tac Toe</h5>
              <p className='card-text text-dark fw-normal'>
              Build a Tic Tac Toe game using React.js and CSS for a two-player experience to enhance logic-building skills
              </p>
              <a href='https://github.com/dhanrajpimple/tic-tac-toe' target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfoilo;
