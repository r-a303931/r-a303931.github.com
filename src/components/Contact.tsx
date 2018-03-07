import * as React from 'react';

import Octicon from 'react-octicon';

export default class Contact extends React.Component {
	render () {
		return (
			<div>
				<a href="https://github.com/r-a303931/" target="_blank">
					<Octicon name="mark-github" /> r-a303931
				</a>
				&nbsp;-&nbsp;
				<a href="mailto:arioux303931@gmail.com">
					<Octicon name="mail" /> arioux303931@gmail.com
				</a>
			</div>
		);
	}
}