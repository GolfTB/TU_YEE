import React from "react";
import Sidebar from "../components/Sidebar";
import Scholarship from "../components/Scholarship";
import NavbarLearning from "../components/NavbarLearning";

function Scholarshippage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="barcontent">
        <NavbarLearning />
        <Scholarship />
      </div>
    </div>
  );
}

export default Scholarshippage;
