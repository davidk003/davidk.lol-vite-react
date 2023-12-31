import React from "react";
import "./ContactCard.css";

interface Contact {
  phone_number: string;
  email: string;
  education: string;
}

export default function ContactCard(prop: Contact): React.ReactElement {
  //Check valid phone format
  let formatted_phone_number: string;
  if (prop.phone_number.length === 10) {
    formatted_phone_number =
      prop.phone_number.slice(0, 3) +
      "-" +
      prop.phone_number.slice(3, 6) +
      "-" +
      prop.phone_number.slice(6);
  } else {
    throw new Error("Invalid phone number format.");
  }

  return (
    <div className="contact-card">
      <div tooltip-wrapper>
        <div className="tooltip">Click to copy</div>
        <div className="tooltip-triangle"></div>
      </div>
      <p
        className="contact-desc"
        onClick={() => clipboardCopy(formatted_phone_number)}
      >
        Phone Number: {formatted_phone_number}
      </p>
      <p className="contact-desc" onClick={() => clipboardCopy(prop.email)}>
        Email: {prop.email}
      </p>
      <p className="contact-desc" onClick={() => clipboardCopy(prop.education)}>
        Education: {prop.education}
      </p>
    </div>
  );
}

function clipboardCopy(s: string) {
  navigator.clipboard.writeText(s);
  //Add code to display copy confirmation
}
