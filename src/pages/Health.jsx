import React from "react";
import NavbarConsulting from "../components/NavbarConsulting";
import Issues from "../components/Issues";
import SidebarConsulting from "../components/SidebarConsulting";


const Health = () => {
  return (
    <div className='dashboard'>
      <SidebarConsulting />
      <div className="barcontent">
        <NavbarConsulting />
        <Issues />
      </div>
    </div>
  );
};

export default Health;