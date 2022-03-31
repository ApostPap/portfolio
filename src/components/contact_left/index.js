import React from "react";
import "../contact_left/style.css";
import { Row, Col } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Contact_Left() {
	return (
		<div>
			<Row className="Contact-text">
				<Col xl={12}>
					<h1 className="p-heading1">Get In Touch</h1>
					<p className="p-heading2">
						<strong>Hi There !!</strong>
						<br />
						Thank you for joining me. Let me know if you have any awesome
						ideas/projects that we can build together. Feel free to{" "}
						<strong>PING</strong> me. You can contact me via the Contact Form{" "}
						<strong>OR</strong> simply click on the social media icons. Take
						care.
					</p>
				</Col>
			</Row>

			<Row className="contact-left-footer">
				<SocialIcons />
			</Row>
		</div>
	);
}

export default Contact_Left;
