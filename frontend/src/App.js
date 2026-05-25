import React, { useState, useEffect } from 'react';
import './App.css';
import Disclaimer from './components/Disclaimer';
import Dashboard from './components/Dashboard';

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('ta-trading-disclaimer-accepted');
    if (accepted === 'true') {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('ta-trading-disclaimer-accepted', 'true');
    setDisclaimerAccepted(true);
  };

  return (
    <div className="app">
      {!disclaimerAccepted ? (
        <Disclaimer onAccept={handleAcceptDisclaimer} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
