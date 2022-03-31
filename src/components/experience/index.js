import React from "react";
import "../experience/style.css";
import { Col, Row, Container, Image, Button } from "react-bootstrap";

import { Bounce, Fade, Flip } from "react-reveal";
import SonorusLogo from "../../assets/img/sonorus_logo.webp";
import EreunaLogo from "../../assets/img/ereuna_plhr.jpg";
import UpworkLogo from "../../assets/img/upwork_logo.png";

function Experience() {
	return (
		<Container className="experience_container" fluid={true}>
			<Bounce>
				<div className="experience_container">
					<Fade top cascade>
						<h1 className="experience_header">
							Experience
							<span role="img" aria-label="work">
								💻
							</span>
						</h1>
					</Fade>

					<div className="experience_card">
						<Row>
							<Col xl={3}>
								<Flip left duration={2000}>
									<div className="div_image">
										<span class="experience_circle">
											<Image
												src={SonorusLogo}
												className="experience_image"
												alt="Image of Sonorus Consulting"
											/>
										</span>
									</div>
								</Flip>
							</Col>

							<Col xl={9}>
								<div className="experience_info">
									<h2 className="work_name">Sonorus Consulting</h2>
									<h3>Senior Software Developer</h3>

									<h4>December 2019 - Present</h4>

									<span>
										Building extremely customizable internal apps for clients
										world-wide. Daily communication with the clients and the
										team.
									</span>

									<footer className="tools_footer">
										Tools:{" "}
										<strong>
											Appsheet, Airtable, Google App Script, Google Sheets, SQL,
											Javascript
										</strong>
									</footer>
									<div className="button_div">
										<Button variant="dark" size="lg" className="work-btn">
											<a
												style={{ textDecoration: "none", color: "white" }}
												href="https://www.sonorusconsulting.com/"
												target="_blank"
											>
												View Site
											</a>
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</div>
					<div className="spacer_small"></div>

					<div className="experience_card">
						<Row>
							<Col xl={3}>
								<Flip left duration={2000}>
									<div className="div_image">
										<span class="experience_circle">
											<Image
												src={EreunaLogo}
												className="experience_image_small"
												alt="Image of Army Research and Informatics Department"
											/>
										</span>
									</div>
								</Flip>
							</Col>

							<Col xl={9}>
								<div className="experience_info">
									<h2 className="work_name">Greek Army</h2>
									<h3>Research and Informatics Department</h3>

									<h4>September 2021 - March 2022</h4>

									<span>
										Manage, operate and maintain major Business and Management
										Information Systems, to increase the combat power of the
										Army, utilizing the knowledge and modern technologies of
										Information Science.
									</span>

									<div className="button_div">
										<Button variant="dark" size="lg" className="work-btn">
											<a
												style={{ textDecoration: "none", color: "white" }}
												href="http://army.gr/el/organosi/stoiheia-organosis-genikoy-epiteleioy-stratoy/dieythynseis-somaton/dieythynsi-ereynas-kai-6"
												target="_blank"
											>
												View Site
											</a>
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</div>

					<div className="spacer_small_second"></div>

					<div className="experience_card">
						<Row>
							<Col xl={3}>
								<Flip left duration={2000}>
									<div className="div_image">
										<span class="experience_circle">
											<Image
												src={UpworkLogo}
												className="experience_image_small"
												alt="Image of Upwork"
											/>
										</span>
									</div>
								</Flip>
							</Col>

							<Col xl={9}>
								<div className="experience_info">
									<h2 className="work_name">Upwork and Fiverr Freelancer</h2>
									<h3>Android Freelance Developer</h3>

									<h4>April 2019 - Oct 2019</h4>

									<span>
										Developed Android apps for clients worldwide. Used
										technologies as Java, JSON, REST API, Video Streaming,
										Relational Databases.
									</span>

									<div className="button_div">
										<Button variant="dark" size="lg" className="work-btn">
											<a
												style={{ textDecoration: "none", color: "white" }}
												href="https://www.upwork.com/freelancers/~010ecac12f9da3bdee"
												target="_blank"
											>
												Upwork
											</a>
										</Button>{" "}
										&nbsp;
										<Button variant="dark" size="lg" className="work-btn">
											<a
												style={{ textDecoration: "none", color: "white" }}
												href="https://www.fiverr.com/apostolospap"
												target="_blank"
											>
												Fiverr
											</a>
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>

			</Bounce>
		</Container>
	);
}

export default Experience;
