import React from "react";

export default class Projects extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | Projects";
    }
    render() {
        return (
            <div className="content">
                <h1>Projects</h1>
                <p>
                    Please see my{" "}
                    <a
                        href="https://www.github.com/justinknueppel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github page
                    </a>{" "}
                    to see my on-going projects!
                </p>
            </div>
        );
    }
}
