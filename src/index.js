import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can keep this for global styles
import LandingPage from './Landingpage'; // Import your LandingPage component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage /> {/* Replace App with LandingPage */}
  </React.StrictMode>
);

// Optional: Web Vitals for performance measuring
reportWebVitals();