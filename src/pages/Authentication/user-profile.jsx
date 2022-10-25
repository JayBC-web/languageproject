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
import React, { useState } from "react";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";
import Select from "react-select";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { withRouter } from "react-router-dom";

const data = {
  intro:
    "Hello. I’m a lawyer and I live in Brazil. I Would like to find people to practice english and Czech. I wantto talk about travel, hobbies, food, culture, etc. If you want to practise your English and talk about interesting things, feel free to send",
};

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const UserProfile = (props) => {
  //meta title
  document.title = "DuoLearn | Profile - Learn language through conversation";
  const [selectedMulti, setselectedMulti] = useState(null);

  const handleMulti = (selectedMulti) => {
    setselectedMulti(selectedMulti);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="DuoLearn" breadcrumbItem="Your Profile" />
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
                  <Row>
                    <Col>
                      <div className="mt-4">
                        <div>
                          <Label htmlFor="formFileLg" className="form-label">
                            Upload profile picture:
                          </Label>
                          <Input
                            className="form-control form-control-lg"
                            id="formFileLg"
                            type="file"
                          />
                        </div>
                      </div>
                    </Col>
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
                            <p className="mb-2" style={{ fontSize: "0.9rem" }}>
                              <i className="bx bx-map bx-border-circle" />{" "}
                              Valencia, Spain
                            </p>
                            <Row className="mb-3">
                              <label className="col-md-12 col-form-label">
                                My native language is...
                              </label>
                              <div className="col-md-12">
                                <select className="form-control">
                                  <option>Select</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                            </Row>
                            <Row className="mb-3">
                              <label className="col-md-12 col-form-label">
                                I want to learn...
                              </label>
                              <div className="col-md-12">
                                <select className="form-control">
                                  <option>Select</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                            </Row>
                            {/* <p className="mb-0" style={{fontSize: "0.9rem"}}>
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
                            </p> */}
                          </div>
                        </div>
                        {/* <button type="button" className="btn btn-dark me-2">
                          <i className="bx bx-user-plus font-size-16 align-middle me-2"></i>{" "}
                          Follow
                        </button>
                        <button type="button" className="btn btn-info me-2">
                          <i className="bx bx-send  font-size-16 align-middle me-2"></i>{" "}
                          Send Message
                        </button> */}
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
                        <div className="mt-3">
                          <Label>Update about me:</Label>
                          <Input
                            type="textarea"
                            id="textarea"
                            maxLength="225"
                            rows="5"
                            defaultValue={data.intro}
                            className="mb-3"
                          />
                        </div>
                        <h4>Hobbies and Interests</h4>
                        <div className="mb-3">
                          <label className="control-label">
                            Update hobbies and interests:
                          </label>
                          <Select
                            value={selectedMulti}
                            isMulti={true}
                            onChange={() => {
                              handleMulti();
                            }}
                            options={optionGroup}
                            className="select2-selection"
                          />
                        </div>
                        <button type="button" className="btn btn-info me-2">
                          Save Changes
                        </button>
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
