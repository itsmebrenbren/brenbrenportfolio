import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import FluidContainer from './visuals/FluidContainer.jsx';
import Header from './visuals/Header.jsx';
import Box from './visuals/Box';

function App() {
  return (
    <div>
      <FluidContainer>
        <Header></Header>
      </FluidContainer>
      <FluidContainer>
        <Box>
          <h3>About Me</h3>
        </Box>
      </FluidContainer>
    </div>
  );
}

export default App;
