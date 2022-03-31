import React from "react";
import "../home_left/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import CV from "../../assets/cv3.pdf";

function Home_Left() {
	return (
		<Container className="home-left">
			<Row className="home-left-main">
				<Col xl={12} className="home-left-main-col">
					<h2 className="first-line">
						Hello{" "}
						<span class="wave" role="img" aria-label="wave">
							👋
						</span>
					</h2>
					<h2 className="second_line">
						I am{" "}
						<mark class="name-text">
							<strong>Apostolos Papadopoulos</strong>
						</mark>
					</h2>
					<h3>
						<ReactTypingEffect
							text="Software Developer || Tech Enthusiast ... " //text=["Hello.", "World!"]
							className="typical"
							speed="100"
							eraseDelay="500000"
						/>
					</h3>
					<br />
					<Button variant="outline-light" size="lg" className="home-left-aboutmme-btn">
						<Link
							to="/about"
							style={{ textDecoration: "none", color: "orange" }}
							className="home-left-aboutme"
						>
							About Me
						</Link>
					</Button>{" "}
					&nbsp;
					<Button variant="outline-light" size="lg" className="home-left-aboutmme-btn">
						<Link
							to="/projects"
							style={{ textDecoration: "none", color: "white" }}
							className="home-left-aboutme"
						>
							Projects
						</Link>
					</Button>{" "}
					&nbsp;
					<div className="home_spacer"></div>
					<Button
						variant="outline-light"
						size="lg"
						className="home-left-aboutmme-btn"
					>
						<Link
							style={{ textDecoration: "none", color: "white" }}
							to="/contact"
							className="home-left-aboutme"
						>
							Contact Me
						</Link>
					</Button>{" "}
					&nbsp;
					
					<Button
						variant="outline-light"
						size="lg"
						className="home-left-aboutmme-btn"
					>
						<a
							style={{ textDecoration: "none", color: "white" }}
							href={CV}
							target="_blank"
							className="home-left-aboutme"
						>
							Get my CV
						</a>
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Home_Left;
//<Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a style={{ textDecoration: 'none', color: 'white' }} href="https://blog.com/" target="_blank" className="home-left-aboutme">Blog</a></Button> &nbsp;
// 	<li><a href="assets/img/cv.png" target="_blank">Resume</a></li>
