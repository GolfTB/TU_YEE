import React from "react";
import NavbarConvenient from "../components/NavbarConvenient";
import Reservation from "../components/Reservation";
import SidebarConvenient from "../components/SidebarConvenient";

function Reservationpage() {
  return (
    <div className="dashboard">
      <SidebarConvenient />
      <div className="barcontent">
        <NavbarConvenient />
        <Reservation />
      </div>
    </div>
  );
}

export default Reservationpage;
