import React from 'react';
import {  Router, Route, Redirect } from 'react-router-dom';

// Import your pages/components for routing
import App from './App';
import About from './Pages/About';
import Settings from './Pages/Setting';
import Terms from './Pages/Term';
import Security from './Pages/Security';
import Privacy from './Pages/Privacy';

const RouterApp = () => {
  return (
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/terms" component={Terms} />
        <Route path="/security" component={Security} />
        <Route path="/privacy" component={Privacy} />
        <Redirect to="/" />
    </Router>
  );
};

export default RouterApp;
