import * as React from 'react';

export default class CornerstoneChat extends React.Component {
	public render () {
		return (
			<div>
				<h2>Cornerstone Chat</h2>
				<p>
					My church's youth group was having issues with trying to communicate, with
					various group chats arising and falling. Most of the issues with such group chats
					were account management and usability, as most people were not willing to create a
					new account for services such as Google Hangouts, Discord, Skype, etc. As such, there
					was no consistent way to communicate with everyone in the group. However, our church
					has a website that everyone is a member of. This means that if there was a special
					chat service which used their authentication service in order to authenticate people,
					this chat service would be able to solve the account management problem. This is the
					result, a website which uses login credentials and signs in on the church website and
					is even able to download information such as a name to display in the chat service.<br />
					<br />
					There were some commands that were implemented as well, for instance to change the user color
					or to add or remove different text channels. The website was also able to tailor to different
					user tastes, as there was a configurable user theme system
					<img
						src="/cornerstonechat.PNG"
						style={{
							width: '90%',
							height: 'auto',
							margin: '20px auto',
							display: 'block'
						}}
					/>
					<em
						style={{
							display: 'block',
							textAlign: 'center',
							marginTop: -10
						}}
					>
						The dark theme of the chat service
					</em>
					<br />
					Unfortunately, due to lack of funds I was unable to implement push notifications, which is the
					biggest drawback (current budget is $25 for the first two years)
				</p>
			</div>
		);
	}
}