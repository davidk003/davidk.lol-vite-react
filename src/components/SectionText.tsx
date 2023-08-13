import "./SectionText.css";

interface SectionTextProp {
  header: string;
  content: string;
}

export default function SectionText(prop: SectionTextProp): React.ReactElement {
  return (
    <div className="section-text">
      <h3> {prop.header}</h3>
      <p>{prop.content}</p>
    </div>
  );
}
