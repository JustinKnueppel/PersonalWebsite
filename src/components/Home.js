import React from "react";
import GithubIcon from "./icons/Github";
import LinkedInIcon from "./icons/Linkedin";
import EmailIcon from "./icons/Email";

const Home = () => {
  document.title = "Justin Knueppel | Home";

  return (
    <div className="splash">
      <h1>Justin Knueppel</h1>
      <hr />
      <h2>Automation | Web | Data Analytics</h2>
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
};

export default Home;
