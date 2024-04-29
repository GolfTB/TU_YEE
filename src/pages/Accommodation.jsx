import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarAccomodation from '../components/NavbarAccommodation';

function Accommodation() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
      <NavbarAccomodation/>
      </div>
    </div>
  );
};

export default Accommodation