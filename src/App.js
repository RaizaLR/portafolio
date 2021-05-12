import './App.css';
import React from "react";
import About from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>

    <Switch>
          <Route exact path="/sobre-mi">
            <About/>
          </Route>
          <Route exact path="/proyectos">
            <Projects />
          </Route>
          <Route exact path="/contacto">
            <Contact />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
    </Switch>

    </Router>   
  );

}


export default App;