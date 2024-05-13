import "../../styles/Resume.css";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalDetailsSection from "./PersonalDetailsSection";

function Resume({ personalDetails, education, experience }) {
  return (
    <div className="preview">
      <PersonalDetailsSection personalDetails={personalDetails} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
    </div>
  );
}

export default Resume;
