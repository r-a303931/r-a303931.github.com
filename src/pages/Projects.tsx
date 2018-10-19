import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Website from './projects/Website';
import FTC from './projects/FTC';
import UAS4STEM from './projects/UAS4STEM';
import EGR1100 from './projects/CSMEGR-1100';
import SlideManager from './projects/SlideManager';
import CornerstoneChat from './projects/CornerstoneChat';

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
					<Route
						component={EGR1100}
						path="/project/egr1100"
					/>
					<Route
						component={CornerstoneChat}
						path="/project/cornerstonechat"
					/>
					<Route
						component={SlideManager}
						path="/project/slidemanager"
					/>
				</Switch>
			</Router>
		);
	}
}
