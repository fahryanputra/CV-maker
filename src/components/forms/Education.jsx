import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationForm from "./EducationForm";

function Education({ data, setData, onChange, isActive, onShow }) {
  function addEducation(data, setData, e) {
    e.preventDefault();
    setData({
      ...data,
      educations: [
        ...data.educations,
        {
          id: uuidv4(),
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ],
    });
    setActiveIndex(data.educations.length);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <form className="education">
      <h2 onClick={onShow}>Education</h2>
      {isActive &&
        data.educations.map((education, index) => (
          <EducationForm
            key={education.id}
            onChange={onChange}
            education={education}
            index={index}
            isVisible={activeIndex === index}
            onVisible={() => setActiveIndex(index)}
          />
        ))}
      {isActive && data.educations.length < 3 && (
        <button onClick={(e) => addEducation(data, setData, e)}>
          Add education
        </button>
      )}
    </form>
  );
}

export default Education;
