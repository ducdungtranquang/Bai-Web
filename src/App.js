import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Navs from './component/Navs';
import Slider from './component/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navs/>
      <Slider/>
    </div>
  );
}

export default App;
