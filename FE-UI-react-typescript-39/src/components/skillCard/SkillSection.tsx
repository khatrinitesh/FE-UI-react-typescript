import type { Skill } from "../../interface";
import SkillCard from "./SkillCard";

type SkillSectionProps = {
  skills: Skill[];
};

const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <section className="skill-section">
      <h2 className="text-2xl font-bold italic underline text-red-500">
        My Skills
      </h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
