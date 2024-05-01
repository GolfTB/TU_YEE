import React from "react";
import NavbarCommunity from "../components/NavbarCommunity";
import Community from "../components/Community"
import SidebarCommu from "../components/SidebarCommu";

function StudentBoard() {
  return (
    <div className="dashboard">
      <SidebarCommu />
      <div className="barcontent">
        <NavbarCommunity />
        <Community/>
      </div>
    </div>
  );
}

export default StudentBoard;
