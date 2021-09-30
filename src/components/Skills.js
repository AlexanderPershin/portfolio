import React from "react";

import Accordeon from "./Accordeon";

import Split from "./Split";

const skillsList = [
    {
        label: "Html/CSS",
        body: "I create responsive websites using CSS grid, flexbox and media queries. I also use SCSS preprocessor",
    },
    {
        label: "JavaScript",
        body: "I know JavaScript, React/Redux and Express/MongoDB for backend",
    },
    {
        label: "Python",
        body: "I can create website using Django or Django/Djangorestframework/React and PostgreSQL",
    },
    {
        label: "Docker",
        body: "I can use Docker/docker-compose to create containerized applications",
    },
    {
        label: "git",
        body: "I'm familliar with git",
    },
];

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="heading1">
                <Split>My skills:</Split>
            </h1>
            <Accordeon list={skillsList} />
        </div>
    );
};

export default Skills;
