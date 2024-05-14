import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

function InputForm({
  personalDetails,
  setPersonalDetails,
  education,
  setEducation,
  experience,
  setExperience,
  data,
  setData,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      />
      <Experience
        experience={experience}
        setExperience={setExperience}
        data={data}
        setData={setData}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />
      <Education
        education={education}
        setEducation={setEducation}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      />
    </>
  );
}

export default InputForm;
