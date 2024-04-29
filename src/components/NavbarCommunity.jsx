import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'

const NavbarCommunity = () => {
  return (
    <div className='navbar'>
        <ul>
            <Button className='bar3'>Faculty board</Button>
            <Button className='bar3'>Student board</Button>
            <Button className='bar3'>Public board</Button>
        </ul>
    </div>
  )
}

export default NavbarCommunity