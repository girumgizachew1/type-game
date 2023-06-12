import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Settings from './Pages/Setting';
import Terms from './Pages/Term';
import Security from './Pages/Security';
import Privacy from './Pages/Privacy';

const RouterApp = () => {
  return (
    <>
      <Navigate to="/" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
};

export default RouterApp;
