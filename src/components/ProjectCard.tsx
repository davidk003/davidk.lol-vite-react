import React from "react";
import "./ProjectCard.css";

interface Project {
  name: string;
  desc: string;
  projectURL: string;
}

export default function ProjectCard(prop: Project): React.ReactElement {
  return (
    <div className="project-card">
      <a href={prop.projectURL}>
        <h1>{prop.name}</h1>
      </a>
      <p>{prop.desc}</p>
    </div>
  );
}
