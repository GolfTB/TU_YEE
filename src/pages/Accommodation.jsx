import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarAccomodation from "../components/NavbarAccommodation";
import RecDorm from "../components/RecDorm";

function Accommodation() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="barcontent">
        <NavbarAccomodation />
        <RecDorm />
      </div>
    </div>
  );
}

export default Accommodation;
