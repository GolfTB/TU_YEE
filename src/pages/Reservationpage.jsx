import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarConvenient from "../components/NavbarConvenient";
import Reservation from "../components/Reservation";

function Reservationpage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="barcontent">
        <NavbarConvenient />
        <Reservation />
      </div>
    </div>
  );
}

export default Reservationpage;
