import React from "react";
import "./ContactForm.css";

export default function ContactForm(): React.ReactElement {
  return (
    <>
      <h3> Send a message: </h3>
      <form>
        <input type="text" name="form-sender" />
        <input type="text" name="form-subject" />
        <input type="text" name="form-message" />
      </form>
    </>
  );
}
