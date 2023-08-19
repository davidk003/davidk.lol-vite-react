import React from "react";
import "./Projects.css"
import EmoticonHeader from "../components/EmoticonHeader";
import ProjectCard from "../components/ProjectCard";

const example_desc:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let cardArray: React.ReactElement[] = [];
export default function Projects(): React.ReactElement
{
    fillCards(100);
    return <div className="project-page-container">
        <EmoticonHeader content="Projects" emoticon="🔨"></EmoticonHeader>
        <div className="project-card-container">
        <ProjectCard name="test1" desc={example_desc+example_desc} projectURL="http://www.google.com"></ProjectCard>
            {cardArray}
        {/* <ProjectCard name="test1" desc={example_desc} projectURL="http://www.google.com"></ProjectCard> */}
        </div>
    </div>
}

function fillCards(n: number): void
{
    if(cardArray.length<n) //Prevent infinite card generation 
    {
        for(let i:number = 0; i < n; i++)
        {
            cardArray.push(<ProjectCard name={"test"+ i.toString()} desc={example_desc} projectURL="http://www.google.com"></ProjectCard>)
        }
    }

}