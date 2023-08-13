import React from "react";
import ContactForm from "../components/ContactForm";
import "./Contacts.css";
import ContactCard from "../components/ContactCard";
import EmoticonHeader from "../components/EmoticonHeader";

export default function Contacts(): React.ReactElement {
  return (
    <div className="contacts-page-container">
      <EmoticonHeader content="Contacts" emoticon="📞"></EmoticonHeader>
      {/* <button style={{ margin: "1rem" }}> Add contact card</button> */}
      <ContactCard
        phone_number="0000000000"
        email="example@email.com"
        education="someuniversity"
      />
      <ContactForm />
    </div>
  );
}
