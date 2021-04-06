import emailjs from "emailjs-com";

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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label className="form-label">Name</label>
      <input style={{ width: '150px'}} type="text" name="user_name" />
      <label className="form-label">Email</label>
      <input type="email" name="user_email" />
      <label className="form-label">Message</label>
      <textarea style={{ width: '400px', height: '100px'}} name="message" />
      <input className="form-button" type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
