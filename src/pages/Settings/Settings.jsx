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

import Breadcrumb from "../../components/Common/Breadcrumb";
import Select from "react-select";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { withRouter } from "react-router-dom";

const Settings = (props) => {
  //meta title
  document.title = "DuoLearn | Profile - Learn language through conversation";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="DuoLearn" breadcrumbItem="Settings" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <Row className="justify-content-center">
                    <h1>Account Settings</h1>
                    <p>This is where hte magic happens</p>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12">
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      <p className="card-title-desc">
                        Here are examples of <code>.form-control</code> applied
                        to each textual HTML5 <code>&lt;input&gt;</code>{" "}
                        <code>type</code>.
                      </p>

                      <Row className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-2 col-form-label"
                        >
                          Name
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Jack Conroy"
                          />
                        </div>
                      </Row>
                      <Row className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="col-md-2 col-form-label"
                        >
                          Location
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Valencia, Spain"
                          />
                        </div>
                      </Row>
                      <Row className="mb-3">
                        <label
                          htmlFor="example-date-input"
                          className="col-md-2 col-form-label"
                        >
                          Date of Birth
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="date"
                            defaultValue="1997-08-19"
                            id="example-date-input"
                          />
                        </div>
                      </Row>
                      {/* <Row className="mb-3">
                    <label
                      htmlFor="example-search-input"
                      className="col-md-2 col-form-label"
                    >
                      Search
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="search"
                        defaultValue="How do I shoot web"
                      />
                    </div>
                  </Row> */}
                      <Row className="mb-3">
                        <label
                          htmlFor="example-email-input"
                          className="col-md-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="email"
                            defaultValue="hello@example.com"
                          />
                        </div>
                      </Row>
                      {/* <Row className="mb-3">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                      URL
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://getbootstrap.com"
                      />
                    </div>
                  </Row> */}
                      {/* <Row className="mb-3">
                    <label
                      htmlFor="example-tel-input"
                      className="col-md-2 col-form-label"
                    >
                      Telephone
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue="1-(555)-555-5555"
                      />
                    </div>
                  </Row> */}
                      <Row className="mb-3">
                        <label
                          htmlFor="example-password-input"
                          className="col-md-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="password"
                            defaultValue="hunter2"
                          />
                        </div>
                      </Row>
                      <Row className="mb-3">
                        <label
                          htmlFor="example-password-input"
                          className="col-md-2 col-form-label"
                        >
                          Confirm Password
                        </label>
                        <div className="col-md-10">
                          <input
                            className="form-control"
                            type="password"
                            defaultValue="hunter2"
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row>
                      <Col className="text-start">
                      <button type="button" className="btn btn-danger me-2">
                          Delete Account
                        </button>
                        </Col>
                        <Col className="text-end">
                        <button type="button" className="btn btn-info me-2">
                          Save Changes
                        </button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Settings);
