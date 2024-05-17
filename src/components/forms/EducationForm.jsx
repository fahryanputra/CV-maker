import InputGroup from "../InputGroup";

function EducationForm({ onChange, education, index, isVisible, onVisible }) {
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
            onChange={(e) => onChange(education.id, "school", e)}
            value={education.school}
          />
          <InputGroup
            id={"degree-" + index}
            labelText="Degree"
            type="text"
            placeholder="Degree or field of study"
            onChange={(e) => onChange(education.id, "degree", e)}
            value={education.degree}
          />
          <InputGroup
            id={"education-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) => onChange(education.id, "startDate", e)}
            value={education.startDate}
          />
          <InputGroup
            id={"education-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) => onChange(education.id, "endDate", e)}
            value={education.endDate}
          />
          <InputGroup
            id={"education-location-" + index}
            labelText="Location"
            type="text"
            placeholder="School's location"
            onChange={(e) => onChange(education.id, "location", e)}
            value={education.location}
          />
        </div>
      ) : (
        <h4>{education.school ? education.school : "Blank School"}</h4>
      )}
    </div>
  );
}

export default EducationForm;
