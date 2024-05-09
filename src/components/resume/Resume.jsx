import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PersonalDetailsSection from "./PersonalDetailsSection";

function Resume({ personalDetails, education, experience }) {
  return (
    <div>
      <h1>Resume</h1>
      <PersonalDetailsSection personalDetails={personalDetails} />
      <EducationSection education={education} />
      <ExperienceSection experience={experience} />
    </div>
  );
}

export default Resume;
