import React from "react";

export default class Resume extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | Resume";
    }
    render() {
        return (
            <div className="content">
                <h1>Resume</h1>
                <p>
                    <a
                        href="https://github.com/JustinKnueppel/Resume/raw/master/Resume.pdf"
                        download
                    >
                        Download
                    </a>
                </p>
            </div>
        );
    }
}
