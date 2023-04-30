import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import RequestButton from './RequestButton';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState<String>('');
  const url = "http://redis-service.default.svc.cluster.local:8000";

  useEffect(() => {
    axios.get(url).then(res => {
      setMessage(res.data.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click button to send requests. Message = {message}
        </p>
        <RequestButton />
      </header>
    </div>
  );
}

export default App;
