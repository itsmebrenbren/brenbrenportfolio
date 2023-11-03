//general imports
import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
//container components
import FluidContainer from './visuals/FluidContainer';
import Header from './visuals/Header';
import Row from './visuals/Row';
import Col from './visuals/Col';
import Box from './visuals/Box';
//html components
import P from './visuals/P';
import H3 from './visuals/H3';
import Pic from './Images/PortfolioPic1.jpg';
//navbar
import Menu from './visuals/Menu';


function App() {
  return (
    <div>
      <FluidContainer>
        <Header></Header>
      </FluidContainer>
      <Row>
        <Col>
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
      <Menu></Menu>
    </div>
  );
}

export default App;
