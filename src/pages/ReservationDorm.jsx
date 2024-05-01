import React from "react";
import NavbarAccommodation from "../components/NavbarAccommodation";
import ResDorm from '../components/ResDorm'
import SidebarAccom from "../components/SidebarAccom";
function ReservationDorm() {
  return (
      <div className='dashboard'>
        <SidebarAccom />
        <div className="barcontent">
        <NavbarAccommodation/>
        <ResDorm />
        </div>
      </div>
    );
  };

export default ReservationDorm;