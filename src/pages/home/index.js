import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';


function Analytics(){
  ReactGa.initialize("")
  ReactGa.pageview('Portfolio - Home Screen')
}
// Portfolio website Google analytics--

function Home() {
  Analytics()
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Apostolos Papadopoulos</title>
                  <link rel="canonical" href="" />
                  <meta name="description" content="Apostolos Papadopoulos | Home - Software Developer  | Software Developer  | Software Engineer | Tech Enthusiast" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
