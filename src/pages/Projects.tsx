import React from "react";
import "./Projects.css"
import EmoticonHeader from "../components/EmoticonHeader";

export default function Projects(): React.ReactElement
{
    return <div className="project-page container">
        <EmoticonHeader content="Projects" emoticon="🛠️"></EmoticonHeader>
    </div>
}