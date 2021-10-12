import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
                <li className={currentTab === "skill" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("skill")}>Skills</span>
				</li>
				<li className={currentTab === "projects" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("projects")}>Projects</span>
				</li>
                <li className="resume mx-2">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSgVh4tuIu_ErO9uOQY88AE1vHwwn6uyGwKg8tgfvKdftjR4325YAaA1LFGPdbHaKjwbA3sMBhC09_c/pub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Resume</a>
                </li>
			</ul>
		</nav>
	);
}

export default Navigation;