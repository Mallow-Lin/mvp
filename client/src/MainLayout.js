import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {

  const linkStyle ={
    textDecoration: 'none',
    color: '#fcea64',
    margin: 30,
  }
  const navStyle ={
    marginLeft: '30%',
    position: 'fixed',
    backgroundColor: '#88c9a1',
    fontSize: 50,
    border: 'dashed',
    borderColor:'#fcea64',
    'border-width': 5,
    height:60,
    // 'align-items': 'center',
    'borderRadius': 40
  }

  return (
    <div>
      <nav style={navStyle}>
          <a><Link to='/' style={linkStyle}>Home</Link></a>
          <a><Link to='Villagers' style={linkStyle}>Villagers</Link></a>
          <a><Link to='Song' style={linkStyle}>Song</Link></a>
          <a><Link to='Fish' style={linkStyle}>Fish</Link></a>
          {/* <a><Link to='Bugs'>Bugs</Link></a> */}
          <a><Link to='Art' style={linkStyle}>Art</Link></a>
          {/* <a><Link to='Furniture'>Furniture</Link></a> */}
      </nav>
      <Outlet />
    </div>

  )
}

export default MainLayout;