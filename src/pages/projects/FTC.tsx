import * as React from 'react';

export default class FTC extends React.Component {
	render() {
		return (
			<div>
				<h2>FIRST Tech Challenge</h2>
				<p>
					The FIRST Tech Challenge for 2016-2017 was Velocity Vortex. Velocity Vortex had two
					main points; these were to collect balls and put them into the corners, and to collect
					balls that would be launched into a target in the middle. I helped design the robot,
					and was the main implementer of the ball launcher that comprised the center of our robot.
					I had the challenge of managing two high velocity wheels that would propel the ball,
					making sure that they stayed at a consistent speed relative to each other. There was
					also a design problem in knowing when to lift a ball, as in the time that the ball could
					be lifted to the wheels to be propelled, the wheels would change speed. A solution that
					I made was to create a 'staging area', where the ball would be held right next to the
					wheels and could instantly be pushed into position to be launched. This was my main
					contribution, I also created a positioning framework that allowed us to use higher level,
					3rd order commands such as 'orient to look at this point', or 'move to this point' instead
					of having to manually control the wheels.
				</p>
			</div>
		);
	}
}
