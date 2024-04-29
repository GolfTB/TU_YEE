import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarCommunity from '../components/NavbarCommunity';

function Community() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
      <NavbarCommunity/>
      </div>
    </div>
  );
};

export default Community