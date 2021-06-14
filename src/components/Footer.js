import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/rhineyman"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/github/github-logo.png").default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/mike-rhiney-1899b51ba/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/linkedin/linkedin-logo.png").default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>			
		</footer>
	);
}

export default Footer;