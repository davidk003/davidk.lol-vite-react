import "./Fun.css";
import Hanoi from "./Hanoi";
import EmoticonHeader from "../components/EmoticonHeader";

export default function Fun() {
  return (
    <div className="fun-page-container">
      <EmoticonHeader content="Fun!" emoticon="🎉"></EmoticonHeader>
      <Hanoi rings={3} rods={10}></Hanoi>
    </div>
  );
}
