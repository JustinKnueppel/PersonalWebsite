import React from "react";

const About = () => {
  document.title = "Justin Knueppel | About";
  return (
    <div className="content">
      <p>Hi, my name is Justin Knueppel.</p>
      <h3>Education</h3>
      <p>
        I am a rising senior at the Ohio State University studying Data
        Analytics. I chose this major because I had always been good with math,
        but had began programming as I ended high school and wanted that to be a
        part of my career. Data Analytics was a major that let me pursue both
        fields. Specifically, I pursued the computational analytics
        specialization as I have focused more on programming rather than
        statistics. This has allowed me to take courses on software engineering
        principals, data structures and algorithms, systems programming,
        discrete mathematics and more.
      </p>
      <h3>Work Experience</h3>
      <p>
        I spent the majority of 2019 as a claims analytics intern for Nationwide
        Insurance where I learned much about the role of Data Analytics in
        industry. For the most part, my focus was on developing automated
        systems to streamline the analytics process. I was proud to be strong
        programmer that could help develop systems that made the jobs of
        everyone around me more straightforward.
      </p>
      <h3>Programming</h3>
      <p>
        I began programming in high school by learning Java to create Minecraft
        mods. Since then, I have studied many facets of computer science and
        programming both formally though my course work at Ohio State, as well
        as informally on my own. I have worked through programs such as the{" "}
        <a href="https://fullstackopen.com/en">Full stack open 2020</a> through
        the University of Helsinky, read books such as{" "}
        <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882">
          Clean Code
        </a>{" "}
        by Robert Martin and{" "}
        <a href="https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670">
          Code Complete
        </a>{" "}
        by Steve McConnell, and also have completed numerous online tutorials
        and personal projects.
      </p>
    </div>
  );
};

export default About;
