import {
  CardBody,
  Col,
  Container,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Breadcrumbs from "/src/components/Common/Breadcrumb";
import CardProject from "./card-project";
import { map } from "lodash";
import { withRouter } from "react-router-dom";

// import { getProjects as onGetProjects } from "/src/store/actions";


//Import Breadcrumb


//Import Cards

const projects = [
  {
    id: 0,
    img: "img1",
    name: "Meaning of life",
    description: "Let's tak about the meaning of life and somehow push philosophy degrees into the matter.",
    status: "Space Available",
    color: "success",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      {
        id: 1, img: "avatar4", fullname: "Janice Cole", skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
      {
        id: 2, img: "avatar5", fullname: "Steve Foster",
        skills: [{ id: 1, name: "UI/UX" }],
      },
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Backend" }],
      },
      {
        id: 4, img: "avatar2", fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 1,
    img: "img2",
    name: "Do you usually remember your dreams? ",
    description: "Last night I had a really weird dream and now I want to talk about it with a bunch of strangers online.",
    status: "Limited space",
    color: "warning",
    dueDate: "22 Oct, 19",
    commentsCount: 183,
    team: [
      { id: 1, img: "avatar8" },
      { id: 2, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 2,
    img: "img3",
    name: "Do you get on well with your neighbors?",
    description: "What do you hate about living where you live and what do you love?",
    status: "Room Full",
    color: "danger",
    dueDate: "13 Oct, 19",
    commentsCount: 175,
    team: [
      { id: 1, img: "Null", name: "K", color: "info", fullname: "Kony Brafford" },
      { id: 2, img: "avatar2", fullname: "Daniel Candles" }
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 3,
    img: "img4",
    name: "Do you think stress is ever good, useful, or necessary?",
    description: "If several languages coalesce",
    status: "Space Available",
    color: "success",
    dueDate: "14 Oct, 19",
    commentsCount: 202,
    team: [
      { id: 1, img: "avatar1", fullname: "Janice Cole" }, 
      { id: 2, img: "avatar6", fullname: "Janice Cole" }, 
      { id: 3, img: "avatar7", fullname: "Janice Cole" },     
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 4,
    img: "img5",
    name: "Tell me about your country",
    description: "I want to know about people's countries and why they like them.",
    status: "Space Available",
    color: "success",
    dueDate: "13 Oct, 19",
    commentsCount: 194,
    team: [
      { id: 1, img: "avatar1", fullname: "Jennifer Walker" },
      { id: 2, img: "avatar3", fullname: "Daniel Candel" },
      { id: 3, img: "Null", name: "3+", color: "danger" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 5,
    img: "img6",
    name: "Which part of town do you live in?",
    description: "For informational purposes and that...",
    status: "Limited space",
    color: "warning",
    dueDate: "24 Oct, 19",
    commentsCount: 122,
    team: [
      { id: 1, img: "avatar4", fullname: "Janice Cole" },
      { id: 2, img: "avatar5", fullname: "Steve Foster" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 6,
    img: "img3",
    name: "Can you tell us about your first date?",
    description: "Let's talk about first dates",
    status: "Room Full",
    color: "danger",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      { id: 1, img: "avatar5", fullname: "Steve Foster" },
      { id: 3, img: "Null", name: "R", color: "warning", fullname: "Rony Candles" },
    ],
  },
  {
    id: 7,
    img: "img4",
    name: "What do you love most about your home?",
    description: "Tell us about your home and country so we can find out more about eachothers likes and dislikes",    
    status: "Space Available",
    color: "success",
    dueDate: "11 Oct, 19",
    commentsCount: 185,
    team: [
      { id: 1, img: "Null", name: "L", color: "pink", fullname: "Lony Mackay" },
      { id: 3, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 8,
    img: "img2",
    name: "Do bad mannered people upset you?",
    description: "Their most common words that upset you.",
    status: "Space Available",
    color: "success",
    dueDate: "12 Oct, 19",
    commentsCount: 106,
    team: [
      { id: 1, img: "avatar4", fullname: "Janice Cole" },
      { id: 2, img: "avatar5", fullname: "Steve Foster" },
      { id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker" },
      { id: 3, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
]


//redux


const ProjectsGrid = props => {

   //meta title
  document.title="DuoLearn | Group Conversations - Learn language through conversation with native speakers";

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  const handlePageClick = page => {
    setPage(page);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="DuoLearn" breadcrumbItem="Group Conversations" />

          <Row>
            <CardProject projects={projects} />
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
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ProjectsGrid);
