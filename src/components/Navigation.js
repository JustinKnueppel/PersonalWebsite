import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ location }) => {
  const currentPath = location.pathname;
  console.log(currentPath);
  
  return (
    <nav className="nav-bar">
      <ul className="left">
        <li className={currentPath === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul className="right">
        <li className={currentPath === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={currentPath === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="/assets/Resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
