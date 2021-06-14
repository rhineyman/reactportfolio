import React from "react";

// function Footer() {
//     return (<table className="table">
//         <thead>
//             <tr>
//                 <th scope="col">Email</th>
//                 <th scope="col">Github</th>
//                 <th scope="col">Phone Number</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <th scope="col">rhineyman@gmail.com</th>
//                 <th scope="col">https://github.com/rhineyman</th>
//                 <th scope="col">999-999-9999</th>
//             </tr>
//         </tbody>
//     </table>)
// }
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
						src={require("../assets/github/github-logo.png")}
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
						src={require("../assets/linkedin/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>			
		</footer>
	);
}

export default Footer;