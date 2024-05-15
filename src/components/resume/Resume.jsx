import "../../styles/Resume.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalDetailsSection from "./PersonalDetailsSection";

function Resume({ data }) {
  return (
    <div className="preview">
      <PersonalDetailsSection data={data} />
      <ExperienceSection data={data} />
      <EducationSection data={data} />
    </div>
  );
}

export default Resume;
