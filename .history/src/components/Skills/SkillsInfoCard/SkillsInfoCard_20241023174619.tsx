import React from "react";
import "./SkillsInfoCard.css";

interface Skill {
  skill: string;
  skillLevel: string;
  percentage: string; // percentage は通常数値ですが、元のコードに従って文字列型とします。
}

interface SkillsInfoCardProps {
  heading: string;
  skills: Skill[]; // Skill型の配列
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
