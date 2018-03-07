import * as React from 'react';
import { Link } from 'react-router-dom';

import './TopNavigation.css';

export class TopNavigationLink extends React.Component<{
	url: string;
	imageurl: string | boolean;
	text: string;
}> {
	constructor(props: {
		url: string;
		imageurl: string;
		text: string;
	}) {
		super(props);
	}

	render () {
		return (
			<div
				className={
					typeof this.props.imageurl === 'boolean' && !this.props.imageurl ?
						'topNavLink no-image' : 'topNavLink'
				}
			>
				{
					typeof this.props.imageurl === 'boolean' && !this.props.imageurl ?
						null : <div className="topNavImage">
							<div
								style={{
									'backgroundImage': 'url("' + this.props.imageurl + '")'
								}}
							/>
						</div>
				}
				<div className="topNavBody">
					<div className="topNavTitle">
						<Link to={'/project/' + this.props.url}>
							{this.props.text}
						</Link>
					</div>
					<div className="topNavDescription">
						{this.props.children}

						<div className="link">
							<Link to={'/project/' + this.props.url}>
								Read more...
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default class TopNavigation extends React.Component {
	render () {
		return (
			<div className="topNavGroup">
				{this.props.children}
			</div>
		);
	}
}