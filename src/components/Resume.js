import React from "react";

export default class Resume extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | Resume";
    }
    render() {
        return (
            <div className="content">
                <h1>Resume</h1>
            </div>
        );
    }
}
