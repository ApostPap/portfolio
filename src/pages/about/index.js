import React, { Component } from 'react';
import '../about/style.css';
import {Card, Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import Education from '../../components/education';

import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';


import Experience from '../../components/experience';


class About extends Component {

  componentDidMount() {
  
    ReactGa.initialize("");
    ReactGa.pageview('Portfolio - About Screen');
    //Portfolio website Google analytics--
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Apostolos Papadopoulos</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Apostolos Papadopoulos | About - Product Manager | Project Manager | Software Engineer
                Planning to build a brand or a product, especially tech products, and looking for someone with demonstrated work 
                history in the computer software industry. I have actively worked with leading-edge product development and project 
                management methodologies incorporating industry standards and beyond tools and trends for the past few years. Making 
                a product roadmap, integrating with SDLC, designing the User Experience & Customer Experience, Business Analysis, 
                Marketing Planning, and Communication with a cup of coffee is my hand; that looks like a typical day for me. If you 
                have a vision, want to make an impact, I am always open to discussion." />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
              <Education/>
              <Experience/>
              
             

           </Row>
         
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;

//<CV/>