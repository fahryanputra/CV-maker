import { useState } from "react";
import Resume from "./resume/Resume";
import InputForm from "./forms/InputForm";

function Content() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  return (
    <>
      <InputForm
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
      />
      <Resume
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default Content;
