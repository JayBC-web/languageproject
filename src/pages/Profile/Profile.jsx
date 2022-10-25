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
import { useLocation, withRouter } from "react-router-dom";

import Breadcrumb from "../../components/Common/Breadcrumb";
import React from "react";

//Import Breadcrumb

const Profile = () => {
  //meta title
  document.title = "DuoLearn | Profile - Learn language through conversation";
  let data = useLocation().state.user;

  console.log(data.hobbies);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="DuoLearn" breadcrumbItem={`${data.name}'S Profile`} />
          <Row>
            <Col xs="12" sm="4" lg="3">
              <Card>
                <CardBody>
                  <Row className="justify-content-center">
                    <img
                      src={data.photo}
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
                            <h3>
                              {data.name}, {data.age}
                            </h3>
                            <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                              <i className="bx bx-map bx-border-circle" />{" "}
                              {data.location}
                            </p>
                            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                              Speaks:{" "}
                              <Badge color="primary" className="me-1">
                                {data.speaks}
                              </Badge>{" "}
                            </p>
                            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                              {" "}
                              Learning:{" "}
                              <Badge color="info" className="me-1">
                                {data.learning}
                              </Badge>
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark me-2"
                        >
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
                        <p>{data.intro} </p>
                        <h4>Hobbies and Interests</h4>
                        <p style={{ fontSize: "1.2rem" }}>
                          {data.hobbies.map((hobby) => (
                            <Badge
                              key={hobby}
                              color="light"
                              style={{ marginRight: "0.3rem" }}
                            >
                              {hobby}
                            </Badge>
                          ))}
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

export default withRouter(Profile);
