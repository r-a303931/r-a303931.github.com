import * as React from 'react';

export default class Resume extends React.Component {
	public render() {
		return (
			<div>
				<embed
					src="/resume.pdf"
					height="1200"
					style={{
						width: '100%'
					}}
					type="application/pdf"
				/>
			</div>
		);
	}
}
