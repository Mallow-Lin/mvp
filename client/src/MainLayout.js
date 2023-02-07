import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='Villagers'>Villagers</Link></li>
          <li><Link to='Sea'>Sea</Link></li>
          <li><Link to='Fish'>Fish</Link></li>
          <li><Link to='Bugs'>Bugs</Link></li>
          <li><Link to='Art'>Art</Link></li>
          <li><Link to='Furniture'>Furniture</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}

export default MainLayout;
