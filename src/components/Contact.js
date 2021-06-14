import React from 'react';

function Contact() {
	return ((<table className="table" id="contact">
        <thead>
            <tr>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col">rhineyman@gmail.com</th>
                <th scope="col">999-999-9999</th>
            </tr>
        </tbody>
    </table>)
	);
}

export default Contact;