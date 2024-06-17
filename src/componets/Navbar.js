import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css/Navbar.css'
const Navbar = () => {
  return (
    <nav className='d-flex justify-content-evenly fw-bold nav-continer p-2'>
     <Link to={'/'} className='fs-4 text-decoration-none text-white animation'>Home</Link>
     <Link to={"/portfolio"} className='fs-4  text-white text-decoration-none animation' >Portfolio</Link>
     <Link to={"/contact"} className='fs-4 text-white text-decoration-none animation'>Contact Us</Link>
    </nav>
  )
}

export default Navbar
