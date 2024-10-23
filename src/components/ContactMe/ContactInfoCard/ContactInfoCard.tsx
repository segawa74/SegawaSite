import "./ContactInfoCard.css";

interface ContactInfoCardProps {
  iconUrl: string;
  text: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
