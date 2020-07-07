import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-top-left">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="nav-top-right">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/assets/Resume.pdf" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
