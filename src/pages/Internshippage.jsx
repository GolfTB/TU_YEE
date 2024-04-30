import React from "react";
import Sidebar from "../components/Sidebar";
import Internship from "../components/Internship";
import NavbarLearning from "../components/NavbarLearning";

function Internshippage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="barcontent">
        <NavbarLearning />
        <Internship />
      </div>
    </div>
  );
}

export default Internshippage;
