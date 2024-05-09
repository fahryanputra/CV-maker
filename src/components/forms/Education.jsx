import InputGroup from "../InputGroup";

function Education({ education, setEducation }) {
  function handleEducationChange(inputName, e) {
    setEducation({ ...education, [inputName]: e.target.value });
  }

  return (
    <form className="education">
      <h2>Education</h2>
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
        labelText="Start Date"
        type="date"
        placeholder="Start date"
        onChange={(e) => handleEducationChange("startDate", e)}
        value={education.startDate}
      />
      <InputGroup
        id="education-end-date"
        labelText="End Date"
        type="date"
        placeholder="End date"
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
    </form>
  );
}

export default Education;
