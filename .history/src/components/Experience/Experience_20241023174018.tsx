import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { EXPERIENCE } from "../../utils/data";

// 型定義
interface ExperienceDetails {
  title: string;
  date: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  return (
    <section id="exp" className="experience-container">
      <h5>Experience</h5>

      <div className="experience-content">
        {EXPERIENCE.map((item: ExperienceDetails) => (
          <ExperienceCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
