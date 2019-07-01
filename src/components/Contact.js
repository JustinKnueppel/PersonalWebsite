import React from "react";

export default class Contact extends React.Component {
    componentDidMount() {
        document.title = "Justin Knueppel | Contact";
    }
    render() {
        return (
            <div className="content">
                <h1>Contact</h1>
            </div>
        );
    }
}
