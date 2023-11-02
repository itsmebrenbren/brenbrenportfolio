import './App.css';
import './custom.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
import FluidContainer from './visuals/FluidContainer.jsx';
import Header from './visuals/Header.jsx';

function App() {
  return (
    <div>
      <FluidContainer>
        <Header></Header>
      </FluidContainer>
    </div>
  );
}

export default App;
