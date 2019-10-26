import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_NOT_SECRET_CODE}
    </div>
  );
}

export default App;
