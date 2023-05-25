import React from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
import App from './App';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const Main = () => {
  WebFont.load({
    google: {
      families: ['Muli: 400, 700, 900']
    }
  });

  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });

    /* eslint-disable no-restricted-syntax */
    if (
      !window.__ALLOW_REACT_DEVTOOLS__ &&
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object'
    ) {
      for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => { } : null;
      }
    }

    delete window.__ALLOW_REACT_DEVTOOLS__;
  }

  return <App />;
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
