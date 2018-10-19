import * as React from 'react';

export default class SlideManager extends React.Component {
	public render() {
		return (
			<div>
				<h2>Singer Slide Manager</h2>
				<p>
					One of the praise bands at my church that I was a member of
					had basic slide management. There was a TV that a PowerPoint
					presentation was displayed upon with slides, and each of the
					singers would use their own music. However, this would cause
					problems when the slides and musicians would fall out of
					sync, so I developed this program to be used for everyone on
					the praise band. It allows for generation of simple slides,
					sufficient for singing. It is meant to be used with 3 types
					of devices; a management computer, a second screen for the
					computer, and phones for all of the musicians.
					<br /><br />
					The management computer allowed for generation of songs,
					generation of presentations of songs, and presenting the songs.
					Presentation included the ability to go forwards and backwards,
					and to preview slides that are upcoming without changing the
					present slide.
					<img
						src="/slide-manager manage.PNG"
						style={{
							margin: '20px auto',
							width: '90%',
							maxWidth: 'calc(90% - 40px)',
							display: 'block',
							height: 'auto'
						}}
					/>
					<br />
					Singers are given phones which are connected to the same
					wireless network as the management computer, and can then
					connect and look at the singer view. This view provides the
					current slide, the next slide, and the position in the song.
					The position information also includes how many and which
					verses are going to be sung, which verse they are on, and which
					slide in that verse they are on.
					<img
						src="/slide-manager singer.PNG"
						style={{
							margin: '20px auto',
							width: '90%',
							maxWidth: 'calc(90% - 40px)',
							display: 'block',
							height: 'auto'
						}}
					/>
					<br />
					Finally, there is the presentation view. This is the view that
					the audience receives, and is the view that is most important, even
					though it is the simplest. It simply displays the text of the current
					slide
					<img
						src="/slide-manager present.PNG"
						style={{
							margin: '20px auto',
							width: '90%',
							maxWidth: 'calc(90% - 40px)',
							display: 'block',
							height: 'auto'
						}}
					/>
				</p>
			</div>
		);
	}
}
