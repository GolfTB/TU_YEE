import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'

const NavbarConsulting = () => {
  return (
    <div className='navbar'>
        <ul>
            <Button className='bar3'>Communication</Button>
            <Button className='bar3'>Health</Button>
            <Button className='bar3'>General Issue</Button>
        </ul>
    </div>
  )
}

export default NavbarConsulting