import React from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import NavbarLearning from '../components/NavbarLearning';
import Internship from '../components/Internship';
import Scholarship from '../components/Scholarship';


const Learning = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="barcontent">
        <NavbarLearning />
        <Profile />
        <Internship />
        <Scholarship />
      </div>
    </div>
  );
};

export default Learning;