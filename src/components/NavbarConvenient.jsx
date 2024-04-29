import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'

const NavbarConvenient = () => {
  return (
    <div className='navbar'>
        <ul>
            <Button className='bar3'>Transportation</Button>
            <Button className='bar3'>Reservation</Button>
          
        </ul>
    </div>
  )
}

export default NavbarConvenient