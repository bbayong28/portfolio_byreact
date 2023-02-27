import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Archiving  from './pages/Archiving'
import Contact from './pages/Contact';
import Footer from './pages/Footer'
import Totop from './components/Totop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Archiving />
      <Projects />
      <Contact /> 
      <Footer />
      <Totop/>
    </div>
  );
}

export default App;
