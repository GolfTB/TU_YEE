import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarConvenient from "../components/NavbarConvenient";

function Convenient() {
  return (
      <div className='dashboard'>
        <Sidebar />
        <div className="barcontent">
        <NavbarConvenient/>
        </div>
      </div>
    );
  };

export default Convenient;
