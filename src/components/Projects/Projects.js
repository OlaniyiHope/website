import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import what from "../../Assets/Projects/what.jpeg";
import logow from "../../Assets/Projects/logow.png";
import life2 from "../../Assets/Projects/life2.png";
import cat from "../../Assets/Projects/cat.jpg";
import tmm from "../../Assets/Projects/tmm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={life2}
              isBlog={false}
              title="Investment Mobile App"
              description="A saving, investment and thrift app used to help users to save money,
              invest money and pay bills easily"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmm}
              isBlog={false}
              title="Transport booking Web App"
              description="A transport App and Website, where people can travel, book tickets and trips can be managed by the admin. etc
              "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logow}
              isBlog={false}
              title="Real Estate Booking Site"
              description="A real estate website where travelers and people book and get ticket and houses owner can add and give informations
              about the building"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={what}
              isBlog={false}
              title="MasterPiece Schools"
              description="A school website, where people are informed about the school, students can read news and information and can will later on have
              access to their portals"
              link="https://masterpieceschools.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="Crowdfunding Platform"
              description="A space where people with ideas can get funding for their ideas and people that needs support financially can get it"
            
            />
          </Col>

          <Col md={4} className="project-card">
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
