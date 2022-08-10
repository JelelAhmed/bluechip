import React from 'react';
import Account from './components/Account';
import Navigation from './components/Navigation'
import './App.css';


const  App = () => {
	return (
		<div className="App">
			<Navigation/>
			<Account />
			
		</div>
	);
}

export default App;