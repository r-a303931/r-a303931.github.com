import * as React from 'react';

import Octicon from 'react-octicon';

import './Header.css';

class App extends React.Component {
	render() {
		return (
			<header>
				<h1>Andrew Rioux</h1>
				<a href="https://github.com/r-a303931/" target="_blank">
					<Octicon name="mark-github" /> r-a303931
				</a>
				&nbsp;-&nbsp;
				<a href="mailto:arioux303931@gmail.com">
					<Octicon name="mail" /> arioux303931@gmail.com
				</a>
			</header>
		);
	}
}

export default App;
