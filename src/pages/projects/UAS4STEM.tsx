import * as React from 'react';

export default class UAS4STEM extends React.Component {
	render() {
		return (
			<div>
				<h2>UAS4STEM</h2>
				<p>
					This years UAS4STEM competition was an extension of last
					year's competition, requiring us to not only fly to 8
					waypoints and find 8 other targets, but also to drop water
					balloons onto 3 of those targets. The standard software was
					not very capable of such data handling, so I wrote some
					software that could be injected into the standard software
					and record more precise information than what was usually
					available. This extra software also allowed us to record
					more information, such as keeping a battery log and
					calculating real time information for us such as how long it
					would take to fly to the launch zone and land, giving us
					extra knowledge that allowed us to fly more efficiently
					within safety requirements. This program also included a
					calculator to provide the viewing size of the camera given
					the altitude, to provide us with prior knowledge to know how
					big of an area we could search given an altitude. There were
					also extra buttons that allowed for the operator to not have
					to go to different tabs in our standard software in order to
					perform simple operations, simplifying the flight process.
					<br />
					<img
						style={{
							display: 'inline-block',
							width: 'calc(50% - 40px)',
							margin: 20,
							height: 'auto'
						}}
						src="/uas4stem-logger.PNG"
					/>
					<img
						style={{
							display: 'inline-block',
							width: 'calc(50% - 40px)',
							margin: 20,
							height: 'auto'
						}}
						src="/uas4stem-logger config.PNG"
					/>
				</p>
			</div>
		);
	}
}
