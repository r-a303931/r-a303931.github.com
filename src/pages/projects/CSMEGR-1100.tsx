import * as React from 'react';

export default class EGR1100 extends React.Component {
	render() {
		return (
			<div>
				<h2>CSM EGR-1100 Introduction to Engineering</h2>
				<p>
					My Introduction to Engineering class, taken at the College
					of Southern Maryland, included as the final project a robot
					that was supposed to move ping pong balls from a small
					cradle into a target receptacle.
					<img
						src="/egr1100 design brief.png"
						style={{
							margin: '20px auto',
							width: '50%',
							height: 'auto',
							display: 'block'
						}}
					/>
					<ol>
						<li>Floor: This was the base plate of the board</li>
						<li>
							Lane: This was where the receptacle and the cradle
							sat, and were able to move &#177;2 inches
						</li>
						<li>Cradle: A simple device which held the loads</li>
						<li>Loads: In this case, 4 ping pong balls</li>
						<li>
							Receptacle: A 1.5 inch PVC tube which was where we
							were supposed to drop our loads into
						</li>
						<li>
							Barrier: A 1 foot by 1 foot to limit the number of
							paths that may be taken
						</li>
					</ol>
					<br />
					Each team was given about 5 weeks to do so, and our team
					came up with a design which had a small cart that would move
					back and forth and vacuum up ping pong balls. These would be
					placed in a small container that we could then open up to
					drop our loads
					<img
						src="/egr-1100.jpg"
						style={{
							margin: '20px auto',
							width: '50%',
							height: 'auto',
							display: 'block'
						}}
					/>
					<em
						style={{
							marginTop: -10,
							display: 'block',
							textAlign: 'center'
						}}
					>
						The cart and gantry under construction
					</em>
					<img
						src="/egr-1100 cup.jpg"
						style={{
							margin: '20px auto',
							width: '30%',
							height: 'auto',
							display: 'block'
						}}
					/>
					<em
						style={{
							marginTop: -10,
							display: 'block',
							textAlign: 'center'
						}}
					>
						The container for the ping pong balls
					</em>
					<img
						src="/egr-1100 final.jpg"
						style={{
							margin: '20px auto',
							width: '50%',
							height: 'auto',
							display: 'block'
						}}
					/>
					<em
						style={{
							marginTop: -10,
							display: 'block',
							textAlign: 'center'
						}}
					>
						All the pieces are in place, the wiring just needs to be done
					</em>
				</p>
			</div>
		);
	}
}
