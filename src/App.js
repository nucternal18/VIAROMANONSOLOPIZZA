import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Routes
import Routes from './Routes/routes';

//upload menu db
// import useFirestoreDB from './hooks/useFirestoreDB';
// import { Menu_Array } from './menuDB';

import CookieConsent from './components/CookieConsent';
import './App.css';


function App() {
  const [ hidden, setHidden ] = useState(false);
  
  const readCookie = (e) => {
    const token = Cookies.get('token');
    if (token) {
      setHidden(true);
    }
  }

  // useFirestoreDB(Menu_Array.map(({title, items}) => ({ title, items})));


  useEffect(() => {
    readCookie();
  },[])

  return (
    <div >
      <div className="min-h-screen flex flex-col flex-grow box-border md:box-content">
        <Routes />
      </div>
      <CookieConsent hidden={hidden} setHidden={setHidden} />
    </div>
  );
}

export default App;
