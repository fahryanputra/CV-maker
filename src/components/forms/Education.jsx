import { useState } from "react";
import InputGroup from "../InputGroup";
import { v4 as uuidv4 } from "uuid";

function EducationForm(data, setData, education, index, isVisible, onVisible) {
  function handleEducationChange(id, inputName, e) {
    setData({
      ...data,
      educations: data.educations.map((education) => {
        if (education.id === id) education[inputName] = e.target.value;
        return education;
      }),
    });
  }

  return (
    <div onClick={onVisible} key={education.id}>
      {isVisible ? (
        <div>
          <h4>Education {index + 1}</h4>
          <InputGroup
            id={"school-" + index}
            labelText="School"
            type="text"
            placeholder="School or university"
            onChange={(e) => handleEducationChange(education.id, "school", e)}
            value={education.school}
          />
          <InputGroup
            id={"degree-" + index}
            labelText="Degree"
            type="text"
            placeholder="Degree or field of study"
            onChange={(e) => handleEducationChange(education.id, "degree", e)}
            value={education.degree}
          />
          <InputGroup
            id={"education-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) =>
              handleEducationChange(education.id, "startDate", e)
            }
            value={education.startDate}
          />
          <InputGroup
            id={"education-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) => handleEducationChange(education.id, "endDate", e)}
            value={education.endDate}
          />
          <InputGroup
            id={"education-location-" + index}
            labelText="Location"
            type="text"
            placeholder="School's location"
            onChange={(e) => handleEducationChange(education.id, "location", e)}
            value={education.location}
          />
        </div>
      ) : (
        <h4>{education.school ? education.school : "Blank School"}</h4>
      )}
    </div>
  );
}

function Education({ data, setData, isActive, onShow }) {
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
        data.educations.map((education, index) =>
          EducationForm(
            data,
            setData,
            education,
            index,
            activeIndex === index,
            () => setActiveIndex(index)
          )
        )}
      {isActive && data.educations.length < 3 && (
        <button onClick={(e) => addEducation(data, setData, e)}>
          Add education
        </button>
      )}
    </form>
  );
}

export default Education;
