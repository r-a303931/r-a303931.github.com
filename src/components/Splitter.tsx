import * as React from 'react';

export default class Divider extends React.Component<{
	padding?: number;
}> {
	render () {
		// let parts = this.props.parts || 2;
		return (
			<div
				style={{
					overflow: 'auto',
					clear: 'both',
					display: 'flex'
				}}
			>
				{
					React.Children.map(this.props.children, (child, i) => {
						return (
							<div
								key={i}
								style={{
									flex: 1,
									padding: this.props.padding || 12,
									borderLeft: i === 0 ? undefined : '1px solid #aaa',
									boxSizing: 'border-box',
									margin: 0
								}}
							>
								{child}
							</div>
						);
					})
				}
			</div>
		);
	}
}