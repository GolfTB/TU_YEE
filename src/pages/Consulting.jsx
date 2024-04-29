import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarConsulting from '../components/NavbarConsulting';

function Consulting() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
      <NavbarConsulting/>
      </div>
    </div>
  );
};

export default Consulting