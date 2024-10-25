"use client";
import { useState } from "react";
import { SKILL_SECTIONS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import SkillCard from "./SkillCard/SkillCard";
import { LucideIcon } from "lucide-react";

interface SkillSection {
  category: string;
  iconPath: LucideIcon;
  skillsList: {
    name: string;
    prificiencyLevel: string;
  }[];
}

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillSection>(
    SKILL_SECTIONS[0]
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technical Proficiency
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {SKILL_SECTIONS.map((item) => (
                <SkillCard
                  key={item.category}
                  category={item.category}
                  iconPath={item.iconPath}
                  isActive={selectedSkill.category === item.category}
                  onClick={() => setSelectedSkill(item)}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <SkillsInfoCard
              category={selectedSkill.category}
              skillsList={selectedSkill.skillsList}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;