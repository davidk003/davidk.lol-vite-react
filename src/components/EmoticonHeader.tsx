import "./EmoticonHeader.css";
import React from "react";

interface HeaderContent {
  content: string;
  emoticon: string;
}

export default function EmoticonHeader(
  prop: HeaderContent
): React.ReactElement {
  return <div className="emoticon-header-wrapper">
    <h1 className="emoticon-header">{prop.content}</h1>
    <div className="header-emoticon">{prop.emoticon}</div>
  </div>;
}
