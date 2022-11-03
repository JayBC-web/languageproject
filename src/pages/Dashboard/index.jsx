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
import React, {useState} from "react";

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


const userData = [
  {
    id: 1,
    name: "Jack Samuels",
    age: "23",
    location: "Madrid, Spain",
    photo:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-46226/DynamicRange_SamsungGalaxyS10Plus.jpg",
    speaks: "English",
    learning: "Spanish",
    intro:
      "Professionally, I am twice retired. Initially, I worked for a major US insurance carrier for over 20 years. Starting as a sales agent of insurance and financial instruments and retiring as the General Manager for the State of Vermont.",
    hobbies: ["Running", "Flying", "Knitting", "Travelling", "Wine", "Hiking"],
  },
  {
    id: 2,
    name: "Peter Malone",
    age: "21",
    location: "Valencia, Spain",
    photo:
      "https://1.bp.blogspot.com/-D99PcGnLP9M/XrkaSWSHVFI/AAAAAAAAG_E/7T7NhJ3IuOIO3tXcwCnty9MmlD3DwQ1TgCEwYBhgL/s1600/handsome-young-bearded-man-beautiful-face-car-selfie.jpg",
    speaks: "English",
    learning: "Spanish",
    intro:
      "Professionally, I am twice retired. Initially, I worked for a major US insurance carrier for over 20 years. Starting as a sales agent of insurance and financial instruments and retiring as the General Manager for the State of Vermont.",
    hobbies: ["Music", "Festivals", "Knitting", "Travelling", "Climbing", "Hiking"],
  },
  {
    id: 3,
    name: "Ed Newbould",
    age: "31",
    photo:
      "https://www.boredpanda.com/blog/wp-content/uploads/2021/01/This-guy-took-selfies-every-day-for-ten-years-and-put-them-together-in-an-impressive-time-lapse-5ff2e75fc9c9e__700.jpg",
    location: "Mexico City, Mexico",
    speaks: "English",
    learning: "Spanish",
    intro:
      "I look forward to applying all knowledge acquired in language learning into authentic conversations . I've been thoroughly studying English for a while so my main objective is mastering it .Currently I've commenced taking German classes so...",
    hobbies: ["Tennis", "Climbing", "Knitting", "Travelling", "Cocktails", "Hiking"],
  },
  {
    id: 4,
    name: "Rafique Samuels",
    age: "47",
    location: "Rome, Italy",
    photo:
      "https://i.pinimg.com/originals/e5/18/eb/e518eb72f8b9b0726fe97cc798876f1e.jpg",
    speaks: "English",
    learning: "Spanish",
    intro:
      "Hey! I am very much Brazilian and I'm interested in the British accent, so I would like to talk with people from the UK as I plan on moving there in a few years and in return, I'm willing to help you with Portuguese.",
    hobbies: ["Swimming", "Cooking", "Knitting", "Travelling", "Bungee Jumping", "Hiking"],
  },
];

const Dashboard = (props) => {
  //meta title
  document.title =
    "DuoLearn | Dashboard - Language exchange with native speakers";

    const [page, setPage] = useState(1);
    const [totalPage] = useState(5);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row>
            <Col lg="3">
              <Card>
                <CardBody>
                  <CardTitle>DuoLearn Community</CardTitle>
                  <CardSubtitle className="font-14 text-muted">
                    Speak With Confidence and connect with other users around
                    the world.
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
            </Col>
            <Col>
              <Row>
                <Col lg="6">
                  <Card color="dark" className="text-light">
                    <CardBody>
                      <CardTitle className="mb-4 text-white">
                        <i className="bx bx-help-circle me-2" />
                        Do you have a question about language?
                      </CardTitle>
                      <CardText>
                        Quickly find answers to your questions by asking the
                        community for help. You can ask a question or start a
                        poll.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
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
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  {userData.map((user) => (
                      <Card key={user.id}>
                        <Link to={{ pathname: "/profile", state: { user } }} style={{ textDecoration: 'none', color: "inherit" }}>
                        <CardBody>
                          <Row>
                            <Col xs="12" sm="3">
                              <CardImg src={user.photo} alt="DuoLearn" height="200px" width="150px"/>
                            </Col>
                            <Col xs="12" sm="9">
                              <CardTitle>
                                <h4>{user.name}</h4>
                              </CardTitle>
                              <CardSubtitle className="mb-2">
                                <strong>Speaks:</strong>{" "}
                                <Badge color="primary" className="me-1">
                                 {user.speaks}
                                </Badge>
                                {"    "}
                                <strong>Learning:</strong>{" "}
                                <Badge color="info" className="me-1">
                                  {user.learning}
                                </Badge>
                              </CardSubtitle>
                              <CardText>
                               {user.intro}
                              </CardText>
                              <button
                                type="button"
                                className="btn btn-dark me-2"
                              >
                                <i className="bx bx-user-plus font-size-16 align-middle me-2"></i>{" "}
                                Follow
                              </button>
                              <button
                                type="button"
                                className="btn btn-info me-2"
                              >
                                <i className="bx bx-send  font-size-16 align-middle me-2"></i>{" "}
                                Send Message
                              </button>
                            </Col>
                          </Row>
                        </CardBody>
                        </Link>
                      </Card>
                    ))}
                </Col>
              </Row>
              <Row>
            <Col lg="12">
              <ul className="pagination pagination-rounded justify-content-center mt-2 mb-5">
                <PaginationItem disabled={page === 1}>
                  <PaginationLink
                    previous
                    href="#"
                    onClick={() => handlePageClick(page - 1)}
                  />
                </PaginationItem>
                {map(Array(totalPage), (item, i) => (
                  <PaginationItem active={i + 1 === page} key={i}>
                    <PaginationLink
                      onClick={() => handlePageClick(i + 1)}
                      href="#"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={page === totalPage}>
                  <PaginationLink
                    next
                    href="#"
                    onClick={() => handlePageClick(page + 1)}
                  />
                </PaginationItem>
              </ul>
            </Col>
          </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
