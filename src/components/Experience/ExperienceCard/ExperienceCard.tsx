import "./ExperienceCard.css";

interface ExperienceDetails {
  title: string;
  date: string;
  responsibilities: string[];
}

interface ExperienceCardProps {
  details: ExperienceDetails;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ details }) => {
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

export default ExperienceCard;
