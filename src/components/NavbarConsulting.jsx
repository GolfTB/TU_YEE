import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const NavbarConsulting = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to = "/Consulting" className='bar3'>Communication</Link>
            <Link to = "/Health" className='bar3'>Health</Link>
            <Link to = "/General" className='bar3'>General Issue</Link>
        </ul>
    </nav>
  )
}

export default NavbarConsulting