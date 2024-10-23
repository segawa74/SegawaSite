import "./ContactInfoCard.css";
import PropTypes from "prop-types";
const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
};

ContactInfoCard.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfoCard;
