import React from 'react';
import logo from './logo.svg';
import './App.css';
import RequestButton from './RequestButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click button to send requests.
        </p>
        <RequestButton />
      </header>
    </div>
  );
}

export default App;
