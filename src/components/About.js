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
					My name is Mike Rhiney and I am a former service industry worker currently making the transition into the tech field in Portland, OR. I am originally from Tuscaloosa, Alabama, where I studied business management at the University of Alabama. I’ve always been drawn to the lifestyle in the Northwest, however, so I moved to Whitefish, Montana in 2012 to pursue my love for skiing and the outdoors. I worked for a variety of local businesses in Whitefish, including fine dining, a craft distillery, and a composting company. These experiences broadened my professional skill set and allowed me to move into a management role after a few years. My partner and I relocated to Portland,Or in 2018, and I became the Food and Beverage Supervisor at the Waterfront Marriott. This position was responsible for the scheduling, purchasing and flow of the four restaurants in the building. I eventually took on a new purchasing role as the Beverage Controller, where I became more proficient in Excel and Fintech software. Unfortunately I lost this position due to the pandemic, but the long months of lock down led me to realize I desired a career change. As a long-time PC gamer, I’ve always harbored an interest in computer languages and problem solving. Covid helped me make the decision to pursue these interests by enrolling in the full stack coding program at the University of Oregon. I completed the program in July of 2021 and am greatly looking forward to beginning a new career in web development!
				</p>
			</div>
		</section>
	);
}

export default About;