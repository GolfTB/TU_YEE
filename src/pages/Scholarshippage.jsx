import React from "react";
import Scholarship from "../components/Scholarship";
import NavbarLearning from "../components/NavbarLearning";
import SidebarLearning from "../components/SidebarLearning";

function Scholarshippage() {
  return (
    <div className="dashboard">
      <SidebarLearning />
      <div className="barcontent">
        <NavbarLearning />
        <Scholarship />
      </div>
    </div>
  );
}

export default Scholarshippage;
