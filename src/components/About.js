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
                    field. Before joining the Oregon full stack coding program I attended the University of Alabama
                    where I studied buisness management. After leaving Alabama I moved to Whitefish Montana where I
                    worked for a variety of buisnesses including a fine dining restaraunt, craft distillery, and a
                    composting company. Over the 6 years I spent in Montana I held almost every possible position through out the front
                    and back house of the restaraunt world. In 2018 my partner made the decision to get her masters
                    degree in Portland. In Portland I immediately picked up a job as Food and Beverarge Supervisor at
                    the Waterfront Marriot. This position was responsible of the scheduling, purchasing and flow of the
                    4 restaraunts in the building. Before covid I transitioned to a new purchasing role as the Beverage
                    controller. While I was beverage controller I became more proficient in excel and the Fintech
                    purchasing software. I am currently in a full stack coding program at the University of Oregon and
                    am excited to start a new career!
				</p>
			</div>
		</section>
	);
}

export default About;