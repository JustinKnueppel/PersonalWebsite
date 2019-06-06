import React from "react";

export default class Home extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | Home";
    }
    render() {
        return (
            <div style={contentStyle}>
                <h1 style={{ margin: "2em" }}>
                    Automation | Web | Data Analytics
                </h1>
                <hr style={{ borderTop: "2px dotted white" }} />
                <h1 style={{ margin: "2em" }}>Development with purpose</h1>
                <div className="icons">
                    <a href="mailto:justinknueppel@gmail.com">
                        <i className="fa fa-envelope" alt="Gmail" />
                    </a>
                    <a href="https://www.linkedin.com/in/justin-knueppel-398266171">
                        <i className="fa fa-linkedin" alt="Linkedin" />
                    </a>
                    <a href="https://www.github.com/JustinKnueppel">
                        <i className="fa fa-github" alt="Github" />
                    </a>
                </div>
            </div>
        );
    }
}

const contentStyle = {
    position: "absolute",
    width: "50%",
    height: "60%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -35%)",
    textAlign: "center"
};
