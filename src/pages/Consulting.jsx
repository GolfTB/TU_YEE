import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarConsulting from '../components/NavbarConsulting';
import Communication from "../components/Communication"
function Consulting() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
      <NavbarConsulting/>
      <Communication />
      </div>
    </div>
  );
};

export default Consulting