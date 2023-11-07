//general imports
import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
//container components
import Header from './visuals/Header';
import Box from './visuals/Box';
import Contact from './visuals/Contact';
//html components
import P from './visuals/P';
//navbar
import Menu from './visuals/Menu';
//other useful components
import AboutMe from './visuals/AboutMe';
import Video from './visuals/Video';
import ProjectList from './components/ProjectList';


function App() {

  return (
    <div>
      <Container className = "container-fluid pt-3 d-flex justify-content-around">
        <Header/>
      </Container>
      <Container className = "pt-3"></Container>
      <Container>
        <Row className = "justify-content-around">
          <Col className = "col-6 justify-content-around">
            <AboutMe/>
          </Col>
          <Col className = "col-6 justify-content-around">
            <Video/>
          </Col>
        </Row>
      </Container>
      <Container className = "pt-3"></Container>
      <Menu></Menu>
      <Container className = "pt-3"></Container>
      <Container>
          <ProjectList/>
      </Container>
      <Container className = "pt-5"></Container>
      <Row>
        <Col></Col>
        <Contact/>
        <Col></Col>
      </Row>
      <Container className = "pt-5"></Container>
    </div>
  );
}

export default App;
