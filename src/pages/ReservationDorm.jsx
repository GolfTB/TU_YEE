import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarAccommodation from "../components/NavbarAccommodation";
import ResDorm from '../components/ResDorm'
function ReservationDorm() {
  return (
      <div className='dashboard'>
        <Sidebar />
        <div className="barcontent">
        <NavbarAccommodation/>
        <ResDorm />
        </div>
      </div>
    );
  };

export default ReservationDorm;