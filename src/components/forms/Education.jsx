import InputGroup from "../InputGroup";

function Education({ education, setEducation, isActive, onShow }) {
  function handleEducationChange(inputName, e) {
    setEducation({ ...education, [inputName]: e.target.value });
  }

  const children = (
    <div>
      <InputGroup
        id="school"
        labelText="School"
        type="text"
        placeholder="School or university"
        onChange={(e) => handleEducationChange("school", e)}
        value={education.school}
      />
      <InputGroup
        id="degree"
        labelText="Degree"
        type="text"
        placeholder="Degree or field of study"
        onChange={(e) => handleEducationChange("degree", e)}
        value={education.degree}
      />
      <InputGroup
        id="education-start-date"
        labelText="Start Year"
        type="text"
        placeholder="Start year"
        onChange={(e) => handleEducationChange("startDate", e)}
        value={education.startDate}
      />
      <InputGroup
        id="education-end-date"
        labelText="End Year"
        type="text"
        placeholder='End year or "Present"'
        onChange={(e) => handleEducationChange("endDate", e)}
        value={education.endDate}
      />
      <InputGroup
        id="education-location"
        labelText="Location"
        type="text"
        placeholder="School's location"
        onChange={(e) => handleEducationChange("location", e)}
        value={education.location}
      />
    </div>
  );

  return (
    <form className="education">
      <h2 onClick={onShow}>Education</h2>
      {isActive && children}
    </form>
  );
}

export default Education;
