import './App.css';
import Projects from './Projects'
import About from './AboutMe'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<Router>
  <div className="App">
    <header className="App-header">
        <li className="headerTitle">
          <Link to="/">
            Raiza Longart
            <br/> 
            <div className="headerSubtitle">
              Front-end developer
            </div>
          </Link>
        </li>
        <nav className="stroke">
          <ul>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/sobre-mi">Sobre mi</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
    </header>
    <Switch>
          <Route path="/proyectos">
            <Projects />
          </Route>
          <Route path="/sobre-mi">
            <About />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
        </Switch>
  </div>
</Router>
  );
}

export default App;