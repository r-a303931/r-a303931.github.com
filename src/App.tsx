import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/Header';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					
				</div>
			</Router>
		);
	}
}

export default App;
