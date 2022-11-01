import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import React, { useState } from "react";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "react-rating";
import img4 from "../../assets/images/small/img-8.webp";
import img5 from "../../assets/images/small/img-9.jpg";
import { map } from "lodash";
import { withTranslation } from "react-i18next";

//Import Breadcrumb

//i18n

//redux

const FindExchanges = (props) => {
  //meta title
  document.title =
    "DuoLearn | Find an Exchange - Language exchange with native speakers";

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={"Go Live"} breadcrumbItem={"Go Live"} />
          <Row>
            <Col lg={2}></Col>
            {/* <Col lg="3">
                <Card>
                  <CardBody>
                    <CardTitle>DuoLearn Community</CardTitle>
                    <CardSubtitle className="font-14 text-muted">
                    Speak With Confidence and connect with other users around the world.
                    </CardSubtitle>
                  </CardBody>
                  <CardImg className="img-fluid" src={img4} alt="DuoLearn" />
                  <CardBody>
                    <CardText>
                      As well as providing a solid context for your studies, it
                      also means that you can better connect with native speakers.
                    </CardText>
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                    <Link to="#" className="card-link">
                      Another link
                    </Link>
                  </CardBody>
                </Card>
              </Col> */}
            <Col>
              <Row className="text-center">
                <Col lg="8">
                  <Card color="primary" className="text-light">
                    <CardBody>
                      <CardTitle className="mb-4 text-white">
                        <h3>
                          <i className="bx bx-lock me-2" />
                          Upgrade your account to Premium
                        </h3>
                      </CardTitle>
                      <CardText>
                        Would you like to go live and start a conversation about
                        a chosen topic? <br/>
                        Upgrade your account your account to
                        premium today and unlock this and many other features.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={2}></Col>
                {/* <Col lg="6">
                    <Card color="success" className="text-light">
                      <CardBody>
                        <CardTitle className="mb-4 text-white">
                          <i className="bx bx-user-voice me-2" /> Go Live - Start
                          a conversation
                        </CardTitle>
                        <CardText>
                          Did you know you can start a group converstaion on
                          DuoLearn? All you have to do is click Go Live from the
                          main Nav
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(FindExchanges);
