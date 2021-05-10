import emailjs from "emailjs-com";
import "../css/contactform.css"

function ContactForm() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-div">
      <div className="contact-text">
        <h1>Hello You!</h1>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <label className="contact-label">Name</label>
        <input type="text" name="user_name" />
        <label className="contact-label">Email</label>
        <input type="email" name="user_email" />
        <label className="contact-label">Message</label>
        <textarea name="message" />
        <input className="form-button" type="submit" value="SEND" />
      </form>
    </div>
  );
}

export default ContactForm;
