import React from 'react';

const Disclaimer = ({ onAccept }) => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-content">
        <h1>⚠️ IMPORTANT DISCLAIMER</h1>
        <p>
          This application is for <strong>EDUCATIONAL PURPOSES ONLY</strong>.
        </p>
        <ul>
          <li>❌ NO guarantee of trading accuracy or profitability</li>
          <li>❌ Past performance does NOT indicate future results</li>
          <li>❌ Trading involves SUBSTANTIAL RISK of loss</li>
          <li>✅ Always conduct your own research before trading</li>
          <li>✅ Use only capital you can AFFORD TO LOSE</li>
          <li>✅ Never blindly follow any trading signals</li>
          <li>⚠️ Developers assume NO responsibility for trading losses</li>
        </ul>
        <p>
          By clicking "I Understand and Accept", you acknowledge that you have read and understood
          this disclaimer and assume ALL risks associated with trading.
        </p>
        <button className="disclaimer-btn" onClick={onAccept}>
          I Understand and Accept ✓
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
