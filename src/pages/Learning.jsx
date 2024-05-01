import React from 'react';
import Profile from '../components/Profile';
import NavbarLearning from '../components/NavbarLearning';
import SidebarLearning from '../components/SidebarLearning';


const Learning = () => {
  return (
    <div className='dashboard'>
      <SidebarLearning />
      <div className="barcontent">
        <NavbarLearning />
        <Profile />
      </div>
    </div>
  );
};

export default Learning;