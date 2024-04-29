import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarLearning from '../components/NavbarLearning';

function Home() {
  return (
      <div className='dashboard'>
        <Sidebar />
        <div className="barcontent">
          <NavbarLearning/>
  
        </div>
      </div>
    );
  };


export default Home;