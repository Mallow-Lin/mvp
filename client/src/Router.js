import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './component/Home.js';
import Villagers from './component/Villagers.js';
import MainLayout from './MainLayout.js';
import Song from './component/Song.js';
import Fish from './component/Fish.js';
import Bugs from './component/Bugs.js';
import Art from './component/Art.js';
// import Furniture from './component/Furniture.js';

const Router = () => {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children:[
        {path: '/', element: <Home />},
        {path: 'Villagers', element: <Villagers />},
        {path: 'Song', element: <Song />},
        {path: 'Fish', element: <Fish />},
        // {path: 'Bugs', element: <Bugs />},
        {path: 'Art', element: <Art />},
        // {path: 'Furniture', element: <Furniture />}
      ]
    }
  ])
  return element;
}

export default Router;