import { useState } from "react"
import emailjs from "emailjs-com";
import "../css/contactform.css"

function ContactForm() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [body, setBody] = useState()

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkvy1am",
        "contact_form",
        e.target,
        "user_N942LrUXhlR7Vjb3x7Sm6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED!"+error);
        }
      );
      
      setName("");
      setEmail("");
      setSubject("");
      setBody("");
  }

  return (
    <div className="contact-div">
      {/* <div className="contact-text">
        <h1>Hello You!</h1>
      </div> */}
      <form className="contact-form" onSubmit={sendEmail}>
        <label className="contact-label">Name</label>
        <input value={name} type="text" name="user_name" />
        <label className="contact-label">Email</label>
        <input value={email} type="email" name="user_email" />
        <label className="contact-label">Subject</label>
        <input value={subject} type="subject" name="subject" />
        <label className="contact-label">Message</label>
        <textarea value={body} name="message" />
        <input className="form-button" type="submit" value="SEND" />
      </form>
    </div>
  );
}

export default ContactForm;
