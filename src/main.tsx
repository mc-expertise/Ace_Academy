import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      style={{
        height: '100%',
        background:
          window.location.pathname === '/requests' ? '#F5F5F5' : 'transparent',
      }}>
      <App />
    </div>
  </React.StrictMode>
);
