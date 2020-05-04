import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import './App.css';
const ENDPOINT = "http://127.0.0.1:4001";

require('dotenv').config();

const socketPORT = 6000;


const App = () => {

    const [status, setStatus] = useState("");
    const [foodLevel, setFoodLevel] = useState("");
    const socket = socketIOClient(ENDPOINT);

    useEffect(() => {
        socket.on("status", data => {
          setStatus(data);
        });
        socket.on("foodLevel", data => {
            setFoodLevel(data);
          });
    }, []);

  const sendFeed = () => {
    console.log('sending feed...')
    socket.emit('feed')
  }

  const getStatus = () => {
    // return axios.get('/t2/status')
  }

  return (
    <div className="App">
      <p> Status: {status}</p>
      <p> Food Level: {foodLevel}</p>
      <button
        onClick={() => sendFeed()}
      >
      FEED
      </button>
    </div>
  );
}

export default App;
