import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarCommunity from "../components/NavbarCommunity";
import Community from "../components/Community"

function Communitypage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="barcontent">
        <NavbarCommunity />
        <Community/>
      </div>
    </div>
  );
}

export default Communitypage;
