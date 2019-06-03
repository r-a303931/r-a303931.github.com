import * as React from 'react';

const imageBoxStyle = {
	display: 'flex',
	flex: '1',
	width: 'auto',
	justifyContent: 'center' as 'center',
	alignItems: 'center' as 'center',
	paddingTop: 20
};

const imageStyle = {
	margin: '20px',
	display: 'inline-block',
	width: 'auto',
	maxHeight: 480
};

const imageHandlerStyle = {
	display: 'flex',
	flexDirection: 'row' as 'row',
	maxHeight: 480,
	padding: 20
};

export default class Scoreboard extends React.Component {
	public render () {
		return (
			<div>
				<h2>Scoreboard</h2>
				<div>
					<p>
						A pet project, used more to determine my ability to learn how to use new technologies.
						Written in React Native, this project took 5 hours and 45 minutes, allowing me to learn
						how to use React Native along the way. It has the ability to store games persistently,
						and allows for archiving or deleting them
					</p>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div style={imageHandlerStyle}>
							<div style={imageBoxStyle}>
								<img
									style={imageStyle}
									src="/scoreboardmain.png"
								/>
							</div>
							<div style={imageBoxStyle}>
								<img
									style={imageStyle}
									src="/scoreboardnew.png"
								/>
							</div>
						</div>
						<div style={imageHandlerStyle}>
							<div style={imageBoxStyle}>
								<img
									style={imageStyle}
									src="/scoreboarddonegame.png"
								/>
							</div>
							<div style={imageBoxStyle}>
								<img
									style={imageStyle}
									src="/scoreboardnotdonegame.png"
								/>
							</div>
						</div>
					</div>
					<em
						style={{
							display: 'block',
							textAlign: 'center'
						}}
					>
						The different states of the scoreboard application
					</em>
					<br />
					Unfortunately, due to lack of funds this project has been shut down.
				</div>
			</div>
		);
	}
}