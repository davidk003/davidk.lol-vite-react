import "./Hanoi.css"
import React from "react"

const readMe:string[] = ["Only one disk may be moved at a time." ,
    "Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.",
    "No disk may be placed on top of a disk that is smaller than it."]
const rodArray:string[]=[];
export default function Hanoi(prop: {rings:number, rods:number}):React.ReactElement
{
    for(let i:number = 0; i < prop.rods-1; i++)
    {
        rodArray.push("rods");
    }
    rodArray.push("goal-rod");

    return(<div className="hanoi-container">
        <h2> Tower of Hanoi</h2> 
        <h3> Rules </h3>
        <ol className="rules-list">
        {readMe.map((rule)=><li>{rule}</li>)}
        </ol>

        {rodArray.map((rod) => <span className={rod}></span>)}
    </div>)
}