import InputGroup from "../InputGroup";

function EducationForm({
  onChange,
  education,
  index,
  isVisible,
  onVisible,
  removeForm,
  educationsLength,
}) {
  const formName = "educations";
  return (
    <div className="visible" onClick={onVisible} key={education.id}>
      {isVisible ? (
        <div>
          <InputGroup
            id={"school-" + index}
            labelText="School"
            type="text"
            placeholder="School or university"
            onChange={(e) => onChange(e, formName, education.id, "school")}
            value={education.school}
          />
          <InputGroup
            id={"degree-" + index}
            labelText="Degree"
            type="text"
            placeholder="Degree or field of study"
            onChange={(e) => onChange(e, formName, education.id, "degree")}
            value={education.degree}
          />
          <InputGroup
            id={"education-start-date-" + index}
            labelText="Start Year"
            type="text"
            placeholder="Start year"
            onChange={(e) => onChange(e, formName, education.id, "startDate")}
            value={education.startDate}
          />
          <InputGroup
            id={"education-end-date-" + index}
            labelText="End Year"
            type="text"
            placeholder='End year or "Present"'
            onChange={(e) => onChange(e, formName, education.id, "endDate")}
            value={education.endDate}
          />
          <InputGroup
            id={"education-location-" + index}
            labelText="Location"
            type="text"
            placeholder="School's location"
            onChange={(e) => onChange(e, formName, education.id, "location")}
            value={education.location}
          />
          <div className="button-delete container">
            {educationsLength > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeForm("educations", education.id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ) : (
        <h4 className="collapsed">
          {education.school ? education.school : "Blank School"}
        </h4>
      )}
    </div>
  );
}

export default EducationForm;
