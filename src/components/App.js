import './App.css';
import React from "react";
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>

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