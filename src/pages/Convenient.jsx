import React from "react";
import NavbarConvenient from "../components/NavbarConvenient";
import Transportation from '../components/Transportation'
import SidebarConvenient from "../components/SidebarConvenient";
function Convenient() {

  return (
      <div className='dashboard'>
        <SidebarConvenient />
        <div className="barcontent">
        <NavbarConvenient/>
        <Transportation />
        </div>
      </div>
    );
  };

export default Convenient;
