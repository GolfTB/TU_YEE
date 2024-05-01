import React from "react";
import SidebarAccom from "../components/SidebarAccom";
import NavbarAccomodation from "../components/NavbarAccommodation";
import RecDorm from "../components/RecDorm";

function Accommodation() {
  return (
    <div className="dashboard">
      <SidebarAccom />
      <div className="barcontent">
        <NavbarAccomodation />
        <RecDorm />
      </div>
    </div>
  );
}

export default Accommodation;
