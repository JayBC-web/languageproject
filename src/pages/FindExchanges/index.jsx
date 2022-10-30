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

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "react-rating";
import img4 from "../../assets/images/small/img-8.webp";
import img5 from "../../assets/images/small/img-9.jpg";
import { map } from "lodash";
//i18n
import { withTranslation } from "react-i18next";

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
          <Breadcrumbs
            title={props.t("Find an Exchange")}
            breadcrumbItem={props.t("Find an Exchange")}
          />
          <Row>
            <Col lg="3">
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg src={img5} alt="DuoLearn" />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg
                            src="https://i.pinimg.com/736x/d1/bf/95/d1bf957f92158764cc8798f561ddb097.jpg"
                            alt="DuoLearn"
                          />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg
                            src="https://cdn.shopify.com/s/files/1/0618/8873/files/plumpit_50003419_421979281872953_3629285326815917646_n.jpg?v=1552312678"
                            alt="DuoLearn"
                          />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Kaira Cohen</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LxH_u9MPJGWkKGzmgNr3kaXoBnM1OTinZg&usqp=CAU"
                            alt="DuoLearn"
                          />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg
                            src="https://i.pinimg.com/736x/d1/bf/95/d1bf957f92158764cc8798f561ddb097.jpg"
                            alt="DuoLearn"
                          />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg src={img5} alt="DuoLearn" />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg
                            src="https://as1.ftcdn.net/v2/jpg/02/74/77/88/500_F_274778800_m6SznxQuELSUfXHGqIsTXq1FNNCnY88B.jpg"
                            alt="DuoLearn"
                          />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg src={img5} alt="DuoLearn" />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg src={img5} alt="DuoLearn" />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs="6" sm="3">
                          <CardImg src={img5} alt="DuoLearn" />
                        </Col>
                        <Col xs="12" sm="9">
                          <CardTitle>
                            <h4>Alex Turner</h4>
                          </CardTitle>
                          <CardSubtitle className="mb-2">
                            <strong>Speaks:</strong>{" "}
                            <Badge color="primary" className="me-1">
                              English
                            </Badge>
                            {"    "}
                            <strong>Learning:</strong>{" "}
                            <Badge color="info" className="me-1">
                              Spanish
                            </Badge>
                          </CardSubtitle>
                          <CardText>
                            Professionally, I am twice retired. Initially, I
                            worked for a major US insurance carrier for over 20
                            years. Starting as a sales agent of insurance and
                            financial instruments and retiring as the General
                            Manager for the State of Vermont.
                          </CardText>
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

FindExchanges.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(FindExchanges);
