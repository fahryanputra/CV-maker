import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";

function InputForm({
  personalDetails,
  setPersonalDetails,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Experience experience={experience} setExperience={setExperience} />
      <Education education={education} setEducation={setEducation} />
    </>
  );
}

export default InputForm;
