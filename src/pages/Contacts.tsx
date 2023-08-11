import React from "react";
import ContactForm from "../components/ContactForm"
import "./Contacts.css";

interface Contact {
  phone_number: string;
  email: string;
  education: string;
}

export default function Contacts() {
  return (
    <>
      <h1 className="page-header"> Contacts 📞</h1>
      {/* <button style={{ margin: "1rem" }}> Add contact card</button> */}
      <ContactCard
        phone_number="0000000000"
        email="example@email.com"
        education="someuniversity"
      />
      <ContactForm/>
    </>
  );
}

function ContactCard(prop: Contact): React.ReactElement {
  //Check valid phone format
  let formatted_phone_number: string;
  if (prop.phone_number.length === 10) {
    formatted_phone_number =
      prop.phone_number.slice(0, 4) +
      "-" +
      prop.phone_number.slice(4, 7) +
      "-" +
      prop.phone_number.slice(7);
  } else {
    throw new Error("Invalid phone number format.");
  }

  return (
    <div className="contact-card">
      <p>Phone Number: {formatted_phone_number}</p>
      <p>Email: {prop.email}</p>
      <p>Education: {prop.education}</p>
    </div>
  );

}
