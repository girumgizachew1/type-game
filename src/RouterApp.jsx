import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import TermPage from './Pages/Term';

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/termsofservice" element={<TermPage />} />
       </Routes>
    </>
  );
};

export default RouterApp;
