//general imports
import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import React, { useState } from 'react';
//container components
import Header from './visuals/Header';
//navbar
import Menu from './visuals/Menu';
//other useful components
import AboutMe from './visuals/AboutMe';
import Video from './visuals/Video';
import ProjectList from './components/ProjectList';


function App() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const handleAboutMeOpen = () => {
    setAboutMeOpen(!aboutMeOpen);
    if(projectsOpen) setProjectsOpen(false);
  }

  const handleProjectsOpen = () => {
    setProjectsOpen(!projectsOpen);
    if(aboutMeOpen) setAboutMeOpen(false);
  }

  return (
    <div>
      <Container className = "container-fluid pt-5 d-flex justify-content-around">
        <Header/>
      </Container>
      <Container className = "container-fluid pt-5"></Container>
      <Menu 
        onAboutMeOpen = { handleAboutMeOpen } 
        onProjectsOpen = { handleProjectsOpen } 
      >
      </Menu>
      {aboutMeOpen &&
            <Container>
            <Row className = "justify-content-around">
              <Col xs = "12" sm = "5" className = "justify-content-around">
                <AboutMe/>
              </Col>
              <Col xs = "12" sm = "7" className = "col-6 justify-content-around">
                <Video/>
              </Col>
            </Row>
            <Container className = "container-fluid pt-5"></Container>
          </Container>
      }
      {projectsOpen &&
        <Container>
            <ProjectList/>
        </Container>
      }
      <Container className = "container-fluid pt-5"></Container>
      <div className = "mt-5"></div>
    </div>
  );
}

export default App;
