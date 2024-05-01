import React from 'react'
import NavbarConsulting from '../components/NavbarConsulting';
import Communication from "../components/Communication"
import SidebarConsulting from '../components/SidebarConsulting';
function Consulting() {
  return (
    <div className='dashboard'>
      <SidebarConsulting />
      <div className="barcontent">
      <NavbarConsulting/>
      <Communication />
      </div>
    </div>
  );
};

export default Consulting