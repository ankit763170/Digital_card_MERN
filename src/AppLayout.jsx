import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';


function AppLayout() {
  return (
    <div>
      <Navbar />
    
     
        <Outlet />
      
    </div>
  );
}

export default AppLayout;
