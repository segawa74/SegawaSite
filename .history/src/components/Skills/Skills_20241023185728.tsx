"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "../../utils/data";

interface Skill {
  title: string;
  icon: string;
  skills: {
    skill: string;
    skillLevel: string;
  }[];
}

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILLS[0]);

  const handleSelectSkill = (data: Skill) => {
    setSelectedSkill(data);
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technical Proficiency
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {SKILLS.map((item) => (
                <SkillCard
                  key={item.title}
                  skill={item}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => setSelectedSkill(item)}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <SkillsInfoCard skill={selectedSkill} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
