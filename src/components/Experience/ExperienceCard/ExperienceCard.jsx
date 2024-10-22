import "./ExperienceCard.css";
import PropTypes from "prop-types";
const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      <h6>{details.title}</h6>

      <div className="duration">{details.date}</div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
