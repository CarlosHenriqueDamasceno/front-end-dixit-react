import './App.css';
import React, { useEffect } from 'react';
import socketService from '../services/socketService';
import Lobby from './lobby';
import Room from './room';

function App() {

	useEffect(() => {
		socketService.connect();
	});

	return(
		<div className="container-fluid vh-100 background-image">
			<div className='background-gradient'></div>
			<Room/>
		</div>
	);
}

export default App;
