import { EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience: React.FC = () => {
  return (
    <section id="exp" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="hide grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;