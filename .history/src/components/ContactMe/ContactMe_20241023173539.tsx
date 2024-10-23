import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe: React.FC = () => {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <ContactInfoCard
          iconUrl="./assets/images/email-icon.svg"
          text="segawa74dev@gmail.com"
        />
        <a
          href="https://github.com/segawa74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/segawa74"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
