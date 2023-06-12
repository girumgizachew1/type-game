import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import TermPage from './Pages/Term';

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/terms-of-service" element={<TermPage />} />
       </Routes>
    </>
  );
};

export default RouterApp;
