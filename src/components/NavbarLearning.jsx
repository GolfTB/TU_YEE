import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const NavbarLearning = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to = "/Learning" className='bar3'>Profile</Link>
            <Link to = "/Internshippage" className='bar3'>Internship</Link>
            <Link to = "/Scholarshippage" className='bar3'>Scholarship</Link>
        </ul>
    </nav>
  )
}

export default NavbarLearning