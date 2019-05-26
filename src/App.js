import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Navigation from "./components/navigation/navigation";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default App;
