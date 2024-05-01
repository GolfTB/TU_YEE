import React from "react";
import Internship from "../components/Internship";
import NavbarLearning from "../components/NavbarLearning";
import SidebarLearning from "../components/SidebarLearning";

function Internshippage() {
  return (
    <div className="dashboard">
      <SidebarLearning />
      <div className="barcontent">
        <NavbarLearning />
        <Internship />
      </div>
    </div>
  );
}

export default Internshippage;
