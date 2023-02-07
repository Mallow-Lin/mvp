import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router from './Router.js';
import MainLayout from './MainLayout.js';

const App = () =>{

  return(
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>

  )
}

export default App