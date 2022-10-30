import './App.css';
import React, { useEffect } from 'react';
import socketService from './services/socketService';
import Lobby from './components/lobby';
import Room from './components/room';

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
