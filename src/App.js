import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Routes
import Routes from "./Routes/routes";

import { AuthProvider } from "./context/authContext";
import CookieConsent from "./components/CookieConsent";

import "./App.css";

function App() {
  const [hidden, setHidden] = useState(false);

  const readCookieConsent = (e) => {
    const token = Cookies.get("token");
    if (token) {
      setHidden(true);
    }
  };

  useEffect(() => {
    readCookieConsent();
  }, []);

  return (
    <AuthProvider>
      <div>
        <div className="min-h-screen flex flex-col flex-grow box-border md:box-content">
          <Routes />
        </div>
        <CookieConsent hidden={hidden} setHidden={setHidden} />
      </div>
    </AuthProvider>
  );
}

export default App;
