import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Button, DropDown, Input } from './components';
import './App.css';

const tesselIP = `${process.env.REACT_APP_TESSEL_IP}:${process.env.REACT_APP_SOCKET_PORT}`;

const App = () => {

	const [status, setStatus] = useState('');
	const [foodLevel, setFoodLevel] = useState('');
	const [portionSize, setPortionSize] = useState('normal');
	const [enableFeed, setEnableFeed] = useState(false);
	const socket = socketIOClient(tesselIP);

	useEffect(() => {
		socket.on("status", data => {
			console.log(data)
			setStatus(data);
		});
		socket.on("foodLevel", data => {
			setFoodLevel(data);
		});

		console.log(tesselIP);
	}, []);

	// useEffect(() => {
	// 	socket.emit('portion', portionSize)
	// 	console.log('sending portion size: ', portionSize)
	// }, [portionSize]);

	const sendFeed = () => {
		console.log('sending feed...')
		socket.emit('feed', portionSize)
	}

	const selectPortion = (e) => {
		console.log(e.target.value);
		setPortionSize(e.target.value);
	}

	const checkAuth = (e) => {
		const input = e.target.value;
		console.log(input);
		console.log(process.env.REACT_APP_PASSCODE)
		if (input === process.env.REACT_APP_PASSCODE) {
			setEnableFeed(true);
		}
	}

	return (
		<div className="App">
			<Input
				className="input-auth"
				onChange={(e) => checkAuth(e)}
				label='Enter Passcode'
			/>
			{
				enableFeed && (
					<div className="feed-enabled">
						<Button
							className="btn-feed"
							onClick={() => sendFeed()}
							text={'FEED'}
						/>
						<DropDown
							className="select-feed"
							onChange={(e) => selectPortion(e)}
							defaultValue={portionSize}
						/>

						<div className="status">
							<p> Status: {status}</p>
							<p> Food Level: {foodLevel}</p>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default App;
