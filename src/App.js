import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Challenges from './components/Challenges';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0"/>
        <Projects />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        {/* <Challenges /> */}
        <hr className="m-0"/>

      </div>
    </div>
  );
}

export default App;
