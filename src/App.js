import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
{/*       <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
