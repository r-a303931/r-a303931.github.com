import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div id="content">
						<Switch>
							<Route
								component={Main}
								path="/"
								exact={true}
							/>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
