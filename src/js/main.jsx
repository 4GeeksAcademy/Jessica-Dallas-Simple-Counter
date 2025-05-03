import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './components/SecondsCounter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
let seconds = 0;

const renderCounter = () => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
};

renderCounter(); 

setInterval(() => {
  seconds += 1;
  renderCounter();
}, 1000);
