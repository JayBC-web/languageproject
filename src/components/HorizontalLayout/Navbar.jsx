import { Col, Collapse, Row } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import classname from "classnames";
import { connect } from "react-redux";
//i18n
import { withTranslation } from "react-i18next";

const Navbar = (props) => {
  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Dashboard")} {props.menuOpen}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-world me-2"></i>
                    {props.t("Find an Exchange")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                          <Link to="#" className="dropdown-item">
                            {props.t("Conversation Subject")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link z arrow-none"
                  >
                    <i className="bx bx-group me-2"></i>
                    {props.t("Community")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                  <Link to="#" className="dropdown-item">
                      {props.t("My Connections")}
                    </Link>
                  <Link to="#" className="dropdown-item">
                      {props.t("Find a Partner")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Chat Groups")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link  arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <i className="bx bx-user-pin me-2"></i>
                    {props.t("My Journey")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("My Goals")} 
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("Tweaks")} 
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {props.t("Challenges")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Level Test")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Quick Quiz")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Leaderboards")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  arrow-none"
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <i className="bx bx-user-voice me-2"></i>
                    {props.t("Go Live")} 
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
