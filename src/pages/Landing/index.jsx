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
import img1 from "../../assets/images/happy-man.jpeg";
import img2 from "../../assets/images/pink-girl.jpeg";
import img4 from "../../assets/images/small/img-8.webp";
import img5 from "../../assets/images/small/img-9.jpg";
import { map } from "lodash";
import { withTranslation } from "react-i18next";

//Import Breadcrumb

//i18n

//redux

const FindExchanges = (props) => {
  //meta title
  document.title = "DuoLearn | Home - Language exchange with native speakers";

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Col xl={12}>
                <div className="">
                  <img
                    src={img1}
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </div>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody>
                <Row>
                  <Col xl={12}>
                    <div className="">
                      <img
                        src={img2}
                        className="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(FindExchanges);
