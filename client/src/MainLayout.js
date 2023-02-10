import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav style={{'position': 'fixed', 'display': 'flex', borderColor: '#9dffb0'}}>
          <a><Link to='/'>Home</Link></a>
          <a><Link to='Villagers'>Villagers</Link></a>
          <a><Link to='Song'>Song</Link></a>
          <a><Link to='Fish'>Fish</Link></a>
          {/* <a><Link to='Bugs'>Bugs</Link></a> */}
          <a><Link to='Art'>Art</Link></a>
          {/* <a><Link to='Furniture'>Furniture</Link></a> */}
      </nav>
      <Outlet />
    </>

  )
}

export default MainLayout;
