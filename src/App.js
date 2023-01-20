import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Values from './components/Values';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Values />
      {/* <Form />
      <Footer /> */}
    </div>
  );
}

export default App;
