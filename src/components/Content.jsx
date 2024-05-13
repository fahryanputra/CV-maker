import "../styles/Content.css";
import { useState } from "react";
import Resume from "./resume/Resume";
import InputForm from "./forms/InputForm";

function Content() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    profile: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  return (
    <div className="content">
      <div className="form">
        <InputForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
          experience={experience}
          setExperience={setExperience}
          education={education}
          setEducation={setEducation}
        />
      </div>
      <div className="resume">
        <Resume
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default Content;
