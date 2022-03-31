import React from "react";
import "../education/style.css";
import { Col, Row, Container, Image, Button } from "react-bootstrap";

import { Bounce, Fade, Flip } from "react-reveal";
import AuthLogo from "../../assets/img/LogoAUTH72ppi.png";

function Education() {
	return (
		<Container className="education_container" fluid={true}>
			<Bounce>
				<div className="education_container">
					<Fade top cascade>
						<h1 className="education_header">
							Education{" "}
							<span role="img" aria-label="books">
								📚
							</span>
						</h1>
					</Fade>

					<div className="education_card">
						<Row>
							<Col xl={3}>
								<Flip left duration={2000}>
									<div className="div_image">
										<span class="cat_circle">
											<Image
												src={AuthLogo}
												className="education_image"
												alt="Image of Aristotle University of Thessaloniki"
											/>
										</span>
									</div>
								</Flip>
							</Col>

							<Col xl={9}>
								<Fade right duration={2000} distance="40px">
									<div className="education_info">
										<h2>Aristotle University of Thessaloniki</h2>
										<h5>Bachelor of Computer Science</h5>

										<h5>September 2016 - February 2021</h5>
										<span>
											Took courses in Software Engineering, Data Structures,
											Aritificail Intelligence and Operating Systems.
											Experienced in Java and Python but also knowledgeable in
											C/C++ programming languages. Participated in the research
											of "Topic Modeling for Greek MOOCs" and published a paper.
										</span>
										<div className="button_div_education">
											<Button variant="dark" size="lg" className="work-btn">
												<a
													style={{ textDecoration: "none", color: "white" }}
													href="https://github.com/ApostPap/tmOnGreekMOOCs/blob/main/Paper.pdf"
													target="_blank"
												>
													Research Paper
												</a>
											</Button>{" "}
											&nbsp;
											<Button variant="dark" size="lg" className="work-btn">
												<a
													style={{ textDecoration: "none", color: "white" }}
													href="https://www.csd.auth.gr/en/"
													target="_blank"
												>
													View Site
												</a>
											</Button>
										</div>
									</div>
								</Fade>
							</Col>
						</Row>
					</div>
				</div>
			</Bounce>
		</Container>
	);
}

export default Education;
