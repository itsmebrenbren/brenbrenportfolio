import React from "react";
import { Col, Row } from "reactstrap";
import ProjectCard from "../visuals/ProjectCard";
import { Project } from "../Data/Projects"; // Import the Project array

export default function ProjectList() {
  return (
    <Row>
      {Project.map((project, index) => (
        <Col key={index} className="justify-content-around">
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            img={project.img}
            button={project.button}
          />
        </Col>
      ))}
    </Row>
  );
}