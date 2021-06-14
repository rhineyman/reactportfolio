// import React from "react";

// function Header() {
//     return (
//       <div className="jumbotron jumbotron-fluid">
//         <div className="container">
//           <h1 className="display-4">Mike Rhiney</h1>
//             <p>Aspiring Software Engineer</p>
//         </div>
//       </div>
//     );
//   }
// export default Header;
import React from "react";
import Navigation from "./Navigation";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Mike Rhiney's Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;