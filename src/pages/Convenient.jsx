import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarConvenient from "../components/NavbarConvenient";
import Transportation from '../components/Transportation'
function Convenient() {
  
  return (
      <div className='dashboard'>
        <Sidebar />
        <div className="barcontent">
        <NavbarConvenient/>
        <Transportation />
        </div>
      </div>
    );
  };

export default Convenient;
