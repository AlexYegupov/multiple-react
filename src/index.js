import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window._initReact2 = function(elementId) {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(
    <React.StrictMode>
      <App2 elementId={elementId} />
    </React.StrictMode>
  );
}


window._initReact3 = function(elementId) {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(
    <React.StrictMode>
      <App3 elementId={elementId} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
