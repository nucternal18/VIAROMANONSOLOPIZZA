import React from 'react';

// Routes
import Routes from './Routes/routes';

import CookieConsent from './components/CookieConsent';
import './App.css';


function App() {
  return (
    <div className="min-h-screen flex flex-col flex-grow box-border md:box-content">
      <Routes />
      <CookieConsent />
    </div>
  );
}

export default App;
