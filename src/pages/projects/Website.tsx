import * as React from 'react';

export default class Website extends React.Component {
	render() {
		return (
			<div>
				<h2>CAP Event Manager</h2>
				<p>
					This website is used to do many things, as it is meant to be an all
					purpose website for serving not just Civil Air Patrol units, but groups of them.
					Its original purpose was to be just a simple calendar, and started as a Google service
					that integrated with Google Calendar, Google Sheets, and Google Forms. This was how it
					was started, and this was all that it had when I started to work on it. I started by
					creating an authentication and session system that allowed for cadets to sign up for events,
					which was based off of the National CAP Website. The way it worked was by taking member
					credentials, trying to sign in on the national website, and from there it could determine
					the ID number of a cadet trying to sign in and if the credentials were valid.
					<img
						src="/capunitv1.PNG"
						style={{
							width: '40%',
							height: 'auto',
							display: 'block',
							margin: '20px auto'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							margin: '-10px 0 20px 0'
						}}
					>
						The first website - it only had 6 lines of CSS code!
					</em>
					My next task was to give the entire website a face lift, and make it mirror that of the old
					Maryland Wing website (which is no longer online). This website explored the limits of the
					Google App Script service we were using, but eventually I realized that in order to make a
					good website, we would have to restart from scratch using our own service which turned out
					to be a standard LAMP stack. However, I was able to experiment with modern web technology and
					single-handedly created what turned out to be a known standard, with single page applications.
					This was a standard that lets web pages run more efficiently, as instead of downloading everything
					(images, CSS, JavaScript) every time it requests a web page, it only downloads the tiny bit of
					compact HTML that contains the main content in the body. Eventually, this was even expanded to
					include multipart downloads, allowing the client to download portions for the main body,
					portions for a side navigation bar, etc.
					<img
						src="/capunit v2.PNG"
						style={{
							width: '80%',
							height: 'auto',
							display: 'block',
							margin: '20px auto'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							margin: '-10px 0 20px 0'
						}}
					>
						It had a very simplistic main page - it just displayed all available pages, of which there
						weren't many
					</em>
					The third version allowed me to start fresh and address many different problems in a new way.
					For instance, the first two versions were hard coded to work only for two squadrons, CAP MD-089
					and CAP MD-890. This did not make it very marketable, as most squadrons would want their own
					details and to have their separate versions. In response to this problem, I created the Account
					system, which not only allowed for separation of data among units but also for joining sister
					units together such as MD-089 and MD-890. I reprogrammed the event system, creating creating
					a more integrated form and calendar. I moved on to also add other standard website features, such
					as a news feed. After the news feed came a slew of administration features. Features include:
					<ul>
						<li>The ability to create 'teams' and register events to a specific team</li>
						<li>The ability to mark oneself as absent and therefore not to be called for participation checks</li>
						<li>The ability to upload and manage files</li>
						<li>
							The ability to use multiple tiered permission systems. There was our own system, and the one
							provided by the national website
						</li>
						<li>Contact lists for selecting emails to contact others with</li>
						<li>Continuous integration with the national website via automated database downloads</li>
						<li>Account website configuration</li>
						<li>
							Temporary permissions, for if a flight sergeant was going to be sick and needed a temporary replacement
						</li>
						<li>
							Viewing of personal attendance, for use with tax returns
						</li>
						<li>
							Task assignment, which included the ability to assign tasks and to reply to them with information regarding
							success or failure, and which allowed the person who assigned the task to view said results
						</li>
						<li>
							The ability to link an event from one account's calendar to another, allowing the main account
							to see the attendance of all the linked events and allowing the account linking the event to
							see the attendance from their own account
						</li>
					</ul>
					However, while useful, most of the forms of the website were not interactive, and there were issues with some of
					the more complex relationships (such as the linking of events). It was time for an upgrade.
					However, this website is still successfully running (the best place to look being&nbsp;
					<a href="https://md089.capunit.com/" target="_blank">https://md089.capunit.com</a>).
					<img
						src="/capunit.PNG"
						style={{
							width: '80%',
							height: 'auto',
							display: 'block',
							margin: '20px auto'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							margin: '-10px 0 20px 0'
						}}
					>
						The new main page, which currently is showing upcoming events and details for the next meeting. It also
						includes a mission statement, a Twitter feed, and a FaceBook feed
					</em>
					I am currently in the progress of programming the 4th iteration of this website, which, like the third version,
					will be looking at all the failures of the previous iterations and pulling from their successes. Two of the
					biggest problems with the current iteration, v3, is that it has issues handling data and form interaction.
					The forms in this new version are rewritten to use better state management, and troublesome components were
					redesigned to allow for better user interaction. Some examples include TextAreas and File inputs; TextAreas have
					been upgraded to Rich Text Formatted inputs, now being WYSIWYG (What You See Is What You Get) editors. File
					management has been completely redone, implementing a Google Drive-like system that now allows for folder
					management and better permission management. Alongside these improvements, the new website will also allow for
					creating special users that will represent people who are wanting to join but unsure, and therefore have not
					had the chance to create an account on the national website. As such, the members will be able to sign up for
					events and have their contact information listed for flight sergeants and commanders. This new system will also
					include a method to merge the two accounts once the one on the national website exists.
					<img
						src="/capunit v4.PNG"
						style={{
							width: '80%',
							height: 'auto',
							display: 'block',
							margin: '20px auto'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							margin: '-10px 0 20px 0'
						}}
					>
						An example of some of the new form components
					</em>
					<img
						src="/capunit v4 drive.png"
						style={{
							width: '80%',
							height: 'auto',
							display: 'block',
							margin: '20px auto'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							margin: '-10px 0 20px 0'
						}}
					>
						The 'Google Drive' like file management system that is going to be used
					</em>
				</p>
			</div>
		);
	}
}
