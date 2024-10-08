import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider} from 'react-router-dom';
  
  import Home from './router/Home.jsx';
  import 
  const react = createBrowserRouter([])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
