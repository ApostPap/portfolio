import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Made with ❤️ by <strong>Apostolos Papadopoulos</strong>,  <small>V1.014</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
