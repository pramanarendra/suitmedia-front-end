import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Values from './components/Values';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Values />
      <Form />
    </div>
  );
}

export default App;
