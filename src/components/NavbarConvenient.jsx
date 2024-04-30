import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const NavbarConvenient = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to = "/Convenient" className='bar3'>Transportation</Link>
            <Link to = "/Reservationpage" className='bar3'>Reservation</Link>
          
        </ul>
    </nav>
  )
}

export default NavbarConvenient