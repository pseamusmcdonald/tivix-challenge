import React from 'react'

const ContactForm = () => {
	return (
		<div className="contactFormContainer">
			<form name="contact" method="POST" data-netlify="true" id="contactForm">
				<input type="hidden" name="form-name" value="contact" />
				<input type="text" name="firstName" placeholder="First Name"/>
				<input type="text" name="lastName" placeholder="Last Name"/>
				<input type="text" name="title" placeholder="Title"/>
				<input type="text" name="email" placeholder="Email"/>
				<div className="messageInputWrapper">
					<textarea type="text" name="message" id="messageInput" placeholder="Message" />
				</div>
				<button type="submit" id="contactFormButton">Submit</button>
			</form>
		</div>
	)
}

export default ContactForm