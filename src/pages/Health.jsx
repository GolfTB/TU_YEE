import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarConsulting from "../components/NavbarConsulting";
import Issues from "../components/Issues";


const Health = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <NavbarConsulting />
        <Issues />
      </div>
    </div>
  );
};

export default Health;