import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Reach Out When In Misery!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Issue" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
