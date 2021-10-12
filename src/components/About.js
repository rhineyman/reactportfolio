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
					My name is Mike Rhiney and I am a former service industry worker currently transitioning into the tech field in Portland, OR.  I recently completed the University of Oregon full stack coding program.  I am originally from Tuscaloosa, Alabama and I attended the University of Alabama where I studied business management.  I left Alabama to pursue my passion for skiing in Whitefish Montana, where I worked for a variety of local businesses.  Throughout the years spent in Montana I developed a wide range of skills working in fine dining, a craft distillery, and a composting company.  In 2018 my partner and I relocated to Portland, and I became the
					Food and Beverage Supervisor at the Waterfront Marriott.  This position was responsible for the scheduling, purchasing and flow of the four restaurants in the building. Before Covid I transitioned to a new purchasing role as the Beverage Controller, where I became more proficient in excel and Fintech purchasing software.  When I lost this position due to the pandemic I decided to pursue web development and coding, as computer languages and gaming have long been interests and hobbies of mine.  I completed the full stack coding program at the University of Oregon and am eager to start a new career in web development!

				</p>
			</div>
		</section>
	);
}

export default About;