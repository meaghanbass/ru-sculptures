import React from 'react';
// import logo from './images/logo.svg';
import './App.scss';
import ballerina from './images/ballerina.png'

function App() {
  return (
    <>
      <div className="App"></div>

      <div className="wrapper">
        <header className="App-header">
          <div className="left page-title">
            <h1>The History<br />of Sculpture</h1>
          </div>
          <div className="middle center-image">
            <img src={ballerina} alt="ballerina" />
          </div>
          <div className="right menu">
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
