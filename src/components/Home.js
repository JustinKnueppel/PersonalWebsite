import React from "react";
import GithubIcon from "./icons/Github";
import LinkedInIcon from "./icons/Linkedin";
import EmailIcon from "./icons/Email";

export default class Home extends React.Component {
  componentDidMount() {
    document.title = "Justin Knueppel | Home";
  }
  render() {
    return (
      <div className="splash" >
        <h1 >Automation | Web | Data Analytics</h1>
        <hr />
        <h2 >Development with purpose</h2>
        <div className="icons">
          <a href="mailto:justinknueppel@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/justin-knueppel-398266171">
            <LinkedInIcon />
          </a>
          <a href="https://www.github.com/JustinKnueppel">
            <GithubIcon />
          </a>
        </div>
      </div>
    );
  }
}
