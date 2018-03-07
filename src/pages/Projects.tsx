import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Website from './projects/Website';
import FTC from './projects/FTC';
import UAS4STEM from './projects/UAS4STEM';

export default class Projects extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route
						component={Website}
						path="/project/website"
					/>
					<Route
						component={UAS4STEM}
						path="/project/uas4stem"
					/>
					<Route
						component={FTC}
						path="/project/ftc"
					/>
				</Switch>
			</Router>
		);
	}
}
