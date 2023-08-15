import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Soveteria from './pages/sorveteria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Soveteria/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


