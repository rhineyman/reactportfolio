import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
                <li className="resume mx-2">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQlcmfkDf0_Qxq3s_e2UhDixUVjh6mBqfYfOYF4DBnUrT85dRuPqMtT2dMIwxSN7tV_NxflESBKJmp_/pub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Resume</a>
                </li>
			</ul>
		</nav>
	);
}

export default Navigation;