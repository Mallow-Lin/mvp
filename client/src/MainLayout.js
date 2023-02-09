import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
          <a><Link to='/'>Home</Link></a>
          <a><Link to='Villagers'>Villagers</Link></a>
          <a><Link to='Sea'>Sea</Link></a>
          <a><Link to='Fish'>Fish</Link></a>
          <a><Link to='Bugs'>Bugs</Link></a>
          <a><Link to='Art'>Art</Link></a>
          <a><Link to='Furniture'>Furniture</Link></a>
      </nav>
      <Outlet />
    </>

  )
}

export default MainLayout;
