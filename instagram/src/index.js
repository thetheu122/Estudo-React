import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Instagram from './pages/instagram';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/insta' element={<Instagram/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
