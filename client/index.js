import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'

const container = document.getElementById('app');
const app = createRoot(container);
app.render(<App/>);