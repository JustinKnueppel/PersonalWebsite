import React from "react";

export default class Projects extends React.Component {
    componentDidMount() {
        document.title = 'Justin Knueppel | Projects';
    }
    render() {
        return (
            <div className="content">
                <h1>Projects</h1>
            </div>
        );
    }
}
