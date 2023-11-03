//general imports
import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText
} from "reactstrap";
//container components
import Header from './visuals/Header';
import Box from './visuals/Box';
//html components
import P from './visuals/P';
import H3 from './visuals/H3';
import Pic from './Images/PortfolioPic1.jpg';
import DogPic from './Images/Cat-like fren_4in copy.jpg';
//navbar
import Menu from './visuals/Menu';
//other useful components
import Button from './visuals/Button';


function App() {
  return (
    <div>
      <Container className = "container-fluid pt-3 d-flex justify-content-around">
        <Header></Header>
      </Container>
      <Container>
        <Row className = "justify-content-around">
          <Col className = "col-6 justify-content-around">
            <Box>
              <img src = {Pic} className = "img-fluid rounded float-start" alt = "a women smiling"></img>
              <H3>about me</H3>
              <P>I am a passionate software engineer who embarked on a transformative journey 
                into the world of technology through MIT's XPRO coding bootcamp.
                With a strong foundation in the essentials of programming and a zeal for continuous learning, 
                I am eager to contribute my skills to creating innovative and impactful solutions.</P>
              <P>As I continue to grow in my software engineering journey, 
              I am excited to embrace new challenges, expand my skill set, 
              and contribute my enthusiasm and determination to projects that make a difference. 
              I am eager to contribute my fresh perspectives and innovative ideas to a team that values creativity, 
              collaboration, and continuous improvement.</P>
            </Box>
          </Col>
          <Col>
            <Box>
              <P>YouTube video would go here</P>
            </Box>
          </Col>
        </Row>
      </Container>
      <Container className = "pt-3"></Container>
      <Menu></Menu>
      <Container className = "pt-3"></Container>
      <Container>
        <Row>
          <Col className = "justify-content-around">
            <Card color = "salt-box" className = "border-salt-box">
              <CardBody>
                <CardTitle className = "h3 text-wax-flower">Dog-a-doo Card Games</CardTitle>
                <CardSubtitle className = "p text-romantic">Play some card games against the computer</CardSubtitle>
                <img src = {DogPic} className = "img-fluid rounded float-start" alt = "cat-like fren says hi"/>
                <CardText></CardText>
                <Button>Play Games</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className = "justify-content-around">
          </Col>
          <Col className = "justify-content-around">
          </Col>
          <Col className = "justify-content-around">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
