import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Navs from './component/Navs';
import Slider from './Slider/Slider';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navs/>
      <Slider/>
      <Section/>
    </div>
  );
}

export default App;
