import React from "react";
import "./ContactForm.css";

export default function ContactForm(): React.ReactElement {
  return (
    <>
      <h3> Send a message: </h3>
      <form>
        <label>Name: </label>
        <input type="text" name="form-sender" />
        <label>Subject: </label>
        <input type="text" name="form-subject" />
        <label>Message: </label>
        <input type="text" name="form-message" />
        <input type="submit" name="contact-form-submit"></input>
      </form>
    </>
  );
}
