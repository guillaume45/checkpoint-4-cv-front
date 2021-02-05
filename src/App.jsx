import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home/home";
import Contact from "./components/pages/contact/contact";
import Apropos from "./components/pages/a-propos/Apropos";
import Projets from "./components/pages/projects/project";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="layout">
          <Switch>
            <Route path="/a-propos">
              <Apropos />
            </Route>
            <Route path="/projets">
              <Projets />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
