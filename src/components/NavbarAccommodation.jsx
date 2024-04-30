import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const NavbarAccomodation = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to = "/Accommodation" className='bar3'>Recommended Dormitory</Link>
            <Link to = "/ReservationDorm" className='bar3'>Reservation Dormitory</Link>
        </ul>
    </nav>
  )
}

export default NavbarAccomodation