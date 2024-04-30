import React from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import NavbarLearning from '../components/NavbarLearning';


const Learning = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <NavbarLearning />
        <Profile />
      </div>
    </div>
  );
};

export default Learning;