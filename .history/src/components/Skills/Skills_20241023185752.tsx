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

function SkillCard({
  skill,
  isActive,
  onClick,
}: {
  skill: Skill;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Card
      className={`cursor-pointer transition-all ${
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      }`}
      onClick={onClick}
    >
      <CardContent className="flex items-center p-4">
        <img src={skill.icon} alt={skill.title} className="w-8 h-8 mr-3" />
        <span className="font-medium">{skill.title}</span>
      </CardContent>
    </Card>
  );
}

function SkillsInfoCard({ skill }: { skill: Skill }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skill.skills.map((item, index) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Badge
                variant="outline"
                className="text-sm py-1 px-2 w-full justify-between"
              >
                <span>{item.skill}</span>
                <span className="text-muted-foreground">{item.skillLevel}</span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;
