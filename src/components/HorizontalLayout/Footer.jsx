import { Col, Container, Row } from "reactstrap"

import React from "react"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © DuoLearn</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Designed & Developed by Happy Coding
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
