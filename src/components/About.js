import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/image/new-profile.jpg').default}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					The pandemic lockdown caused me to reflect on my true passion and make a career change. I recently completed a full stack coding program at the University of Oregon, and I'm eager to transition into the tech field and a career in web development in the Portland area. As a long-time PC gamer, I've always been interested in computer language and problem solving.
					<br></br>
					I moved to the Northwest in 2012 after studying business management at the University of Alabama in my hometown of Tuscaloosa. I originally moved to Whitefish, Montana, because of my love for the outdoors and skiing, working for a variety of local businesses in fine dining, craft distillery and composting. These experiences broadened my professional skills and allowed me to move into management roles. I relocated to Portland in 2018 as a food and beverage supervisor at the Waterfront Marriott and quickly fell in love with the city.

				</p>
			</div>
		</section>
	);
}

export default About;