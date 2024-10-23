import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { EXPERIENCE } from "../../utils/data";

const Experience = () => {
  return (
    <section id="exp" className="experience-container">
      <h5>Experience</h5>

      <div className="experience-content">
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
