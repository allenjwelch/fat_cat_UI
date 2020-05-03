import React, { Component } from 'react';
import logo from './logo.svg';
import {  } from'antd';
import ws from 'nodejs-websocket';
require('dotenv').config();

const socketPORT = 6000;
import './App.css';


const App = () => {
  // // INSERT TESSEL IP ADDRESS HERE. Always prepend with 'ws://' to indicate websocket
  // const connection = ws.connect(`ws://${process.env.TESSEL_IP}:` + socketPORT, function() {
  //   // When we connect to the server, send some catchy text
  //   console.log("Connecting to Tessel...");
  //   connection.sendText("Connecting to Tessel...")
  // });

  // // When we get text back
  // connection.on('text', function(text) {
  //   // print it out
  //   console.log("Echoed back from Tessel:", text);
  // })

  const sendFeed = () => {
    axios.post('/t2/feed', {
      key: 1,
      message: 'Feed'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const getStatus = () => {
    return axios.get('/t2/status')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{this.state.response}</p>
      <Button
        onClick={() => sendFeed()}
      >
      FEED
      </Button>
    </div>
  );
}

export default App;
