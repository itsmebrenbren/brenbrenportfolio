import React from "react";
import { Col, Row } from "reactstrap";
import ProjectCard from "../visuals/ProjectCard";
import { Project } from "../Data/Projects"; // Import the Project array

export default function ProjectList() {
  return (
    <Row>
      {Project.map((project, index) => (
        <Col key = { index } className = "col-12 justify-content-around">
          <ProjectCard
            title = { project.title }
            subtitle = { project.subtitle }
            img = { project.img }
            alt = { project.alt }
            info = { project.info }
            progress = { project.progress }
            link = { project.link }
            button = { project.button }
          />
        </Col>
      ))}
    </Row>
  );
}