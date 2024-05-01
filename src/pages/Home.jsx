import React from 'react'
import NavbarLearning from '../components/NavbarLearning';
import SidebarLearning from '../components/SidebarLearning';

function Home() {
  return (
      <div className='dashboard'>
        <SidebarLearning />
        <div className="barcontent">
          <NavbarLearning/>
  
        </div>
      </div>
    );
  };


export default Home;