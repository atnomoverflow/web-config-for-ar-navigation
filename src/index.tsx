import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SginUp from './pages/Sign-up';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sgin-up" element={ <SginUp/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


