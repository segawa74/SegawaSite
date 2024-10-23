import React from "react";
import "./SkillsInfoCard.css";

interface Skill {
  skill: string;
  skillLevel: string;
  percentage: string;
}

interface SkillsInfoCardProps {
  heading: string;
  skills: Skill[];
}

const SkillsInfoCard: React.FC<SkillsInfoCardProps> = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="skill-level">{item.skillLevel}</p>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
