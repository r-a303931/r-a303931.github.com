import * as React from 'react';

import Contact from './Contact';

import './Footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div style={{float: 'left'}}>
					<Contact />
				</div>
				<span style={{float: 'right'}}>Copyright 2018 Andrew Rioux</span>
			</footer>
		);
	}
}
