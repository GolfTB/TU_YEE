import React from 'react'
import '../styles/navbar.css'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const NavbarCommunity = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link to = "/Communitypage"  className='bar3'>Faculty board</Link>
            <Link to = "/StudentBoard"  className='bar3'>Student board</Link>
            <Link to = "/PublicBoard"  className='bar3'>Public board</Link>
        </ul>
    </nav>
  )
}

export default NavbarCommunity