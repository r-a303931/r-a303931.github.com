import * as React from 'react';

import TopNavigation, { TopNavigationLink } from '../components/TopNavigation';
import Divider from '../components/Divider';
import Splitter from '../components/Splitter';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<section>
					<h1
						style={{
							marginTop: 12,
							marginBottom: 12,
							textAlign: 'center',
							color: '#777'
						}}
					>
						Projects
					</h1>
					<p
						style={{
							textAlign: 'center',
							color: '#777'
						}}
					>
						Programs that I have written or am writing
					</p>

					<Divider />
					
					<TopNavigation>
						<TopNavigationLink
							url="website"
							text="Event Manager"
							imageurl="/md089capunit.png"
						>
							{/* needs an image */}
							An event management website for Civil Air Patrol
							(<a target="_blank" href="https://md089.capunit.com">https://md089.capunit.com</a>)
						</TopNavigationLink>
						<TopNavigationLink
							url="uas4stem"
							text="UAS4STEM"
							imageurl="/uas4stem.png"
						>
							UAS4STEM is a competition where teams fly UAS to find targets.
							This project helps reduce noise and provide better data handling
						</TopNavigationLink>
						<TopNavigationLink
							url="ftc"
							text="FIRST Tech Challenge"
							imageurl="/ftc.svg"
						>
							Wrote code for FTC team #11534 in 2016-2017. Was lead programmer and robot designer
						</TopNavigationLink>
					</TopNavigation>
				</section>

				<section>
					<h1
						style={{
							marginTop: 12,
							marginBottom: 12,
							textAlign: 'center',
							color: '#777'
						}}
					>
						Skills
					</h1>
					<p
						style={{
							textAlign: 'center',
							color: '#777'
						}}
					>
						The bolder something is, the more comfortable with it I am
					</p>

					<Divider />

					<Splitter>
						<div>
							<h3>
								Languages learned:
							</h3>
							<ul>
								<li
									style={{
										opacity: 1
									}}
								>JavaScript
									<ul>
										<li
											style={{
												opacity: 1
											}}
										>
											TypeScript
										</li>
										<li
											style={{
												opacity: 1
											}}
										>
											JSX
										</li>
										<li
											style={{
												opacity: 0.25
											}}
										>
											CoffeeScript
										</li>
										<li
											style={{
												opacity: 1
											}}
										>
											JSON
										</li>
									</ul>
								</li>
								<li
									style={{
										opacity: 1
									}}
								>
									PHP
								</li>
								<li
									style={{
										opacity: 1
									}}
								>
									Markup Languages
									<ul>
										<li>
											HTML
										</li>
										<li>
											XHTML
										</li>
										<li style={{opacity: 0.9}}>
											XML
										</li>
										<li style={{opacity: 0.6}}>
											YAML
										</li>
										<li style={{opacity: 0.4}}>
											RAML
										</li>
									</ul>
								</li>
								<li
									style={{
										opacity: 1
									}}
								>
									CSS
									<ul>
										<li
											style={{
												opacity: 1
											}}
										>
											Sass
										</li>
										<li
											style={{
												opacity: 0.25
											}}
										>
											Less
										</li>
									</ul>
								</li>
								<li
									style={{
										opacity: 0.8
									}}
								>
									Python
								</li>
								<li
									style={{
										opacity: 0.6
									}}
								>
									Java
								</li>
								<li
									style={{
										opacity: 0.5
									}}
								>
									C#
								</li>
							</ul>
						</div>
						<div>
							<h3>
								Frameworks learned:
							</h3>
							<ul>
								<li>React
									<ul>
										<li
											style={{
												opacity: 1
											}}
										>
											React DOM
										</li>
										<li
											style={{
												opacity: 0.5
											}}
										>
											React Native
										</li>
									</ul>
								</li>
								<li>Express.js</li>
								<li>Jest</li>
								<li
									style={{
										opacity: 0.3
									}}
								>
									TensorFlow
								</li>
							</ul>
							<p>
								This does not include a PHP framework I wrote from scratch which powers&nbsp;
								<a href="https://md089.capunit.com/" target="_blank">my website</a>
							</p>
						</div>
					</Splitter>
				</section>

				<section>
					<h1
						style={{
							marginTop: 12,
							marginBottom: 12,
							textAlign: 'center',
							color: '#777'
						}}
					>
						Leadership Abilities
					</h1>
					<p
						style={{
							textAlign: 'center',
							color: '#777'
						}}
					>
						How well I work as part of a team
					</p>

					<Divider />

					<p>
						I am in Civil Air Patrol, a Cadet Second Lieutenant. I have earned the Mitchell Award, and have
						progressed through half of the ranks. Achieving Cadet Second Lieutenant requires promoting through
						all the enlisted ranks, of which there are ten. I have taken nine leadership tests, six aerospace tests,
						two comprehensive exams on leadership, and one comprehensive exam on aerospace. Positions I've held
						include:
						<ul>
							<li>
								<h4>Cyber Defense Training Academy Team Leader</h4>
								<p>
									Attended the Cyber Defense Training Academy located in Maryland for the summer of 2017. Led a team of 4 others,
									being a secondary teacher for all the classes and leading them in their studies. Graduated Cyber Defense
									Training Academy with the Honor Cadet award, the top award at Civil Air Patrol National Cadet Special
									Activites. Honor Cadet required having good inter-personal skills, integrity, and textbook knowledge.
								</p>
							</li>
							<li>
								<h4>CyberPatriot team leader</h4>
								<p>
									Participated on the squadron CyberPatriot team for two years (Seasons VII and VIII). Led
									CyberPatriot IX, training cadets who had no experience with CyberPatriot. Led CyberPatriot
									X, again having to train new cadets. In CyberPatriots VII, VIII, and X, my team placed first
									in the state in the Platinum tier, advancing to the regional level. In CyberPatriot VIII,
									my team placed second in the state in the Platinum tier.
								</p>
							</li>
							<li>
								<h4>Cadet Executive Officer</h4>
								<p>
									Leads all the support cadre, reporting only to the Cadet Commander. The Cadet Executive Officer
									must be able to perform the duties of all of those he leads, in case there is a vacancy and no
									replacement. The roles that report to the Cadet Executive Officer are:
									<ul>
										<li>Cadet Administrative Officer</li>
										<li>Cadet Aerospace Education Officer</li>
										<li>Cadet Information Technologies Officer</li>
										<li>Cadet Emergency Services Officer</li>
										<li>Cadet Leadership Officer</li>
										<li>Cadet Safety Officer</li>
										<li>Cadet Public Affairs Officer</li>
										<li>Cadet Operations Officer</li>
										<li>Cadet Supply Officer</li>
										<li>Cadet Recruiting Officer</li>
										<li>Cadet Communications Officer</li>
										<li>Cadet Historian</li>
										<li>Cadet Drug Demand Reduction Officer</li>
										<li>Cadet Activities Officer</li>
									</ul>
									Each of these positions in turn has an NCO who is taught and led by the Officer
								</p>
							</li>
							<li>
								<h4>Cadet Information Technologies Officer</h4>
								<p>
									Provides the support needed when the squadron wants to provide a class and requires support,
									or in my case creating a new website for them tailored to their needs
								</p>
							</li>
							<li>
								<h4>Cadet Administrative Officer</h4>
								<p>
									Manages the test taking and score recording of cadets, filling out the paperwork and
									spreadsheets so that they may promote
								</p>
							</li>
							<li>
								<h4>Cadet Public Affairs Officer</h4>
								<p>
									Manages public relations on the internet with Civil Air Patrol and people looking to join.
									Jobs may include taking photos and writing blog posts.<br />
									While holding this position I was awarded the 2016 Maryland Wing Webmaster of the Year award
								</p>
							</li>
							<li>
								<h4>Cadet Flight Commander</h4>
								<p>
									Leads a flight of 10 indirectly, while also teaching the Flight Sergeant how to better
									teach and perform in their role
								</p>
							</li>
							<li>
								<h4>Cadet Flight Sergeant</h4>
								<p>
									Leads a flight of 10 directly, teaching and instructing
								</p>
							</li>
						</ul>
					</p>
				</section>

				<section>
					<h1
						style={{
							marginTop: 12,
							marginBottom: 12,
							textAlign: 'center',
							color: '#777'
						}}
					>
						School
					</h1>
					<p
						style={{
							textAlign: 'center',
							color: '#777'
						}}
					>
						Scholastic achievements
					</p>
					<Divider />
					<p>
						Rising high school junior, homeschooled<br />
						Projected graduation date lies at May 2020<br />
						Self taught programmer of 6 years<br />
						Dual-enrolling at College of Southern Maryland<br />
						Cumulative high school GPA: 4.0 / 4.0<br />
						Cumulative college GPA: 3.67 / 4.0
					</p>
				</section>
			</div>
		);
	}
}