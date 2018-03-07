import * as React from 'react';

import './Header.css';
import Contact from './Contact';

export default class App extends React.Component {
	render() {
		return (
			<header>
				<h1>Andrew Rioux</h1>
				<Contact />
			</header>
		);
	}
}
