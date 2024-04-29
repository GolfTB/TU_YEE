import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'

const NavbarAccomodation = () => {
  return (
    <div className='navbar'>
        <ul>
            <Button className='bar3'>Recommended Dormitory</Button>
            <Button className='bar3'>Reservation Dormitory</Button>
        </ul>
    </div>
  )
}

export default NavbarAccomodation