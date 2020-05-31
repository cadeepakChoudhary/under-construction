import React from 'react';
import './App.css';
import logo from './underCons.gif';
import CaLogo from './calogo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height="300" alt="logo" />
        <p>
          The Wesbite is under maintenance.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <img src={CaLogo} alt="Chartered Accountant" height="40"></img>
          <span className="title-of-user">Deepak Choudhary</span>
        </div>
        <p className="detail-para"><br>
        </br>
        <span>
          Contact Info
        </span>
        <br></br>
          <span className="user-detail">
            +91-8128111000 |
            deepakchoudhary.255@gmail.com
        </span></p>
      </header>
    </div>
  );
}

export default App;
