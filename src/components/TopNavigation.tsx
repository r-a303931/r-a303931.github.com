import * as React from 'react';
import { Link } from 'react-router-dom';

import './TopNavigation.css';

export class TopNavigationLink extends React.Component<{
	url: string;
	imageurl: string | boolean;
	text: string;
}> {
	constructor(props: { url: string; imageurl: string; text: string }) {
		super(props);
	}

	render() {
		let red = 0;
		let green = 0;
		let blue = 0;

		for (let i = 0; i < this.props.text.length; i++) {
			switch (i % 3) {
				case 0:
					// tslint:disable-next-line:no-bitwise
					red ^= this.props.text.charCodeAt(i);
					break;

				case 1:
					// tslint:disable-next-line:no-bitwise
					green ^= this.props.text.charCodeAt(i);
					break;

				case 2:
					// tslint:disable-next-line:no-bitwise
					blue ^= this.props.text.charCodeAt(i);
					break;

				default:
					break;
			}
		}

		red *= 2;
		green *= 2;
		blue *= 4;

		red %= 255;
		green %= 255;
		blue %= 255;

		return (
			<div
				className={
					typeof this.props.imageurl === 'boolean' &&
					!this.props.imageurl
						? 'topNavLink no-image'
						: 'topNavLink'
				}
				style={{
					borderTopColor: `rgb(${red}, ${green}, ${blue})`
				}}
			>
				{typeof this.props.imageurl === 'boolean' &&
				!this.props.imageurl ? null : (
					<div className="topNavImage">
						<div
							style={{
								backgroundImage:
									'url("' + this.props.imageurl + '")'
							}}
						/>
					</div>
				)}
				<div
					className="topNavBody"
				>
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
	render() {
		return <div className="topNavGroup">{this.props.children}</div>;
	}
}
