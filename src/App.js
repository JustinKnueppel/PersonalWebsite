import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
