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
					My name is Mike Rhiney and I am a former service industry worker making a transition to the tech
					field. Before joining the University of Oregon full stack coding program, I attended the University of Alabama
					where I studied buisness management. After leaving Alabama I moved to Whitefish Montana where I
					worked for a variety of Buisnesses including a fine dining restaurant, craft distillery, and a
					composting company. Over the 6 years I spent in Montana I held almost every possible position in the restaraunt world, both front and back of house. 
					In 2018 my partner made the decision to get her masters	degree in Portland. In Portland I became the Food and Beverage Supervisor at
					the Waterfront Marriot. This position was responsible for the scheduling, purchasing and flow of the
					4 restaraunts in the building. Before covid I transitioned to a new purchasing role as the Beverage
					Controller. While in that position I became more proficient in excel and the Fintech
					purchasing software. I recently completed the full stack coding program at the University of Oregon and
					am excited to start a new career!
				</p>
			</div>
		</section>
	);
}

export default About;