import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";
import React from "react";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { withRouter } from "react-router-dom";

const UserProfile = (props) => {
  //meta title
  document.title = "DuoLearn | Profile - Learn language through conversation";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="DuoLearn" breadcrumbItem="@USENAME'S Profile" />
          <Row>
            <Col xs="12" sm="4" lg="3">
              <Card>
                <CardBody>
                  <Row className="justify-content-center">
                    <img
                      src={avatar}
                      alt="user profile picture"
                      className="img-fluid. max-width: 150px;"
                    />
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="8" lg="9">
              <Row>
                <Card>
                  <CardBody>
                    <Row>
                      <Col sx="12" sm="9">
                        <div className="flex-grow-1 align-self-center mb-3">
                          <div>
                            <h3>Jack Conroy, 30</h3>
                            <p className="mb-2" style={{fontSize: "0.9rem"}}>
                              <i className="bx bx-map bx-border-circle"/> Valencia, Spain
                            </p>
                            <p className="mb-0" style={{fontSize: "0.9rem"}}>
                              Speaks:{" "}
                              <Badge color="primary" className="me-1">
                                English
                              </Badge>{" "}
                            </p>
                            <p className="mb-0" style={{fontSize: "0.9rem"}}>
                              {" "}
                              Learning:{" "}
                              <Badge color="info" className="me-1">
                                Spanish
                              </Badge>
                            </p>
                          </div>
                        </div>
                        <button type="button" className="btn btn-dark me-2">
                          <i className="bx bx-user-plus font-size-16 align-middle me-2"></i>{" "}
                          Follow
                        </button>
                        <button type="button" className="btn btn-info me-2">
                          <i className="bx bx-send  font-size-16 align-middle me-2"></i>{" "}
                          Send Message
                        </button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Row>
              <Row>
                <Card>
                  <CardBody>
                    <Row className="justify-content-center">
                      <Col>
                        <h4>About me!</h4>
                        <p>
                          Hello. I’m a lawyer and I live in Brazil. I Would like
                          to find people to practice english and Czech. I want
                          to talk about travel, hobbies, food, culture, etc. If
                          you want to practise your English and talk about
                          interesting things, feel free to send{" "}
                        </p>
                        <h4>Hobbies and Interests</h4>
                        <p style={{fontSize: "1.2rem"}}>
                          <Badge color="light">Sports</Badge>{" "}
                          <Badge color="light">Travelling</Badge>{" "}
                          <Badge color="light">Chess</Badge>{" "}
                          <Badge color="light">Guitar</Badge>{" "}
                          <Badge color="light">Violin</Badge>{" "}
                        </p>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
